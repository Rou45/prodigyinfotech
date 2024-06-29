document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.querySelector('.open-btn');
    const closeBtn = document.querySelector('.close-btn');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');

    openBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        container.style.marginLeft = '250px'; // Adjust based on sidebar width
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        container.style.marginLeft = '0';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.querySelector('.open-btn');
    const closeBtn = document.querySelector('.close-btn');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    const typingText = document.querySelector('.typing-text');

    const textArray = [" FrontEnd Developer", "Data Analysis", "Java Developer"];
    let textIndex = 0;
    let charIndex = 0;

    const type = () => {
        if (charIndex < textArray[textIndex].length) {
            typingText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    };

    const erase = () => {
        if (charIndex > 0) {
            typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 500);
        }
    };

    setTimeout(type, 1000);

    openBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        container.style.marginLeft = '250px'; // Adjust based on sidebar width
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        container.style.marginLeft = '0';
    });
});
