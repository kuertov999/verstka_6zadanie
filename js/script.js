document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null; 
            } else {
                document.querySelectorAll('.accordion-content').forEach(item => {
                    item.style.maxHeight = null;
                });
                
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
