    uniform vec3 colorA;

    #define NORMAL

    #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
    
        varying vec3 vViewPosition;
    
    #endif
    
    #include <packing>
    #include <uv_pars_fragment>
    #include <normal_pars_fragment>
    #include <bumpmap_pars_fragment>
    #include <normalmap_pars_fragment>
    #include <logdepthbuf_pars_fragment>
    #include <clipping_planes_pars_fragment>
    
    void main() {
    
        #include <clipping_planes_fragment>
        #include <logdepthbuf_fragment>
        #include <normal_fragment_begin>
        #include <normal_fragment_maps>
    
        gl_FragColor = vec4( normalize( normal ) * colorA + 0.5, 1.0 );
    
        #ifdef OPAQUE
    
            gl_FragColor.a = 1.0;
    
        #endif
    
    }
