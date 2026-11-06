
        (function() {
            // Role selection handler
            const roleCircles = document.querySelectorAll('.role-circle');
            roleCircles.forEach(circle => {
                circle.addEventListener('click', function() {
                    const role = this.dataset.role;
                    // Simulate role selection (in production navigate or set state)
                    alert(`نقش «${this.querySelector('.role-label').textContent.trim()}» انتخاب شد.`);
                    // Optionally store in localStorage
                    localStorage.setItem('noobino_role', role);
                });

                // Keyboard support
                circle.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.click();
                    }
                });
            });

            // Modal logic
            const helpTrigger = document.getElementById('helpTrigger');
            const modalOverlay = document.getElementById('modalOverlay');
            const modalClose = document.getElementById('modalClose');

            helpTrigger.addEventListener('click', () => {
                modalOverlay.classList.add('active');
            });

            modalClose.addEventListener('click', () => {
                modalOverlay.classList.remove('active');
            });

            modalOverlay.addEventListener('click', function(e) {
                if (e.target === modalOverlay) {
                    modalOverlay.classList.remove('active');
                }
            });

            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                    modalOverlay.classList.remove('active');
                }
            });

            console.log('✨ Noobino role selection page ready');
        })();
