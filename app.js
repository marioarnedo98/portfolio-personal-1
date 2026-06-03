const { createApp } = Vue;

createApp({
    data() {
        return {
            scrolled: false,
            cursorX: 0,
            cursorY: 0,
            cursorTrailX: 0,
            cursorTrailY: 0
        };
    },
    mounted() {
        // Inicializar AOS (Animate On Scroll)
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100
        });

        // Inicializar iconos de Lucide
        this.$nextTick(() => {
            lucide.createIcons();
        });

        // Detectar scroll para navegación
        window.addEventListener('scroll', this.handleScroll);

        // Cursor personalizado
        document.addEventListener('mousemove', this.moveCursor);

        // Actualizar trail del cursor con animación suave
        this.updateCursorTrail();
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 50;
        },
        
        scrollTo(id) {
            const element = document.getElementById(id);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        },

        moveCursor(e) {
            this.cursorX = e.clientX;
            this.cursorY = e.clientY;

            // Mover el cursor principal instantáneamente
            if (this.$refs.cursor) {
                this.$refs.cursor.style.left = this.cursorX + 'px';
                this.$refs.cursor.style.top = this.cursorY + 'px';
            }
        },

        updateCursorTrail() {
            // Interpolar la posición del trail con un pequeño retraso
            const dx = this.cursorX - this.cursorTrailX;
            const dy = this.cursorY - this.cursorTrailY;
            
            this.cursorTrailX += dx * 0.15;
            this.cursorTrailY += dy * 0.15;

            if (this.$refs.cursorTrail) {
                this.$refs.cursorTrail.style.left = this.cursorTrailX + 'px';
                this.$refs.cursorTrail.style.top = this.cursorTrailY + 'px';
            }

            requestAnimationFrame(this.updateCursorTrail);
        }
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        document.removeEventListener('mousemove', this.moveCursor);
    }
}).mount('#app');
