const dropdown = document.querySelectorAll('.dropdown');

for (let i=0; i<dropdown.length; i++) {
    dropdown[i].onclick = function (event) {
        this.classList.toggle ('active');
            if (event.target.tagName === 'li') {
                dropdown.querySelector('input').value = event.target.innerText;
            }
    }
};

