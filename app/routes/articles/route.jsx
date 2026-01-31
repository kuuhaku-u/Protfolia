import { Outlet, useLocation } from '@remix-run/react';
import { MDXProvider } from '@mdx-js/react';
import { Post, postMarkdown } from '~/layouts/post';
import { baseMeta } from '~/utils/meta';
import { useState, useEffect } from 'react';

export function meta() {
  return baseMeta({ 
    title: 'Article', 
    description: 'Article content',
    prefix: ''
  });
}

export default function Articles() {
  const location = useLocation();
  const [articleData, setArticleData] = useState(null);
  
  useEffect(() => {
    const slug = location.pathname.split('/').at(-1);
    if (!slug) return;
    
    Promise.all([
      import(`../articles.${slug}.mdx`),
      import(`../articles.${slug}.mdx?raw`)
    ]).then(([module, text]) => {
      const words = text.default.trim().split(/\s+/).length;
      const time = Math.round(words / 200);
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      const timecode = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00:00`;
      
      setArticleData({
        frontmatter: module.frontmatter,
        timecode
      });
    }).catch(() => {
      setArticleData(null);
    });
  }, [location.pathname]);

  if (!articleData) {
    return null;
  }

  return (
    <MDXProvider components={postMarkdown}>
      <Post {...articleData.frontmatter} timecode={articleData.timecode}>
        <Outlet />
      </Post>
    </MDXProvider>
  );
}
