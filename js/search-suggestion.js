const suggestions = [
    "Amazon",
    "Flipkart",
    "Myntra",
    "Ajio",
    "Tata Cliq",
    "Nykaa",
    "Mobile",
    "Shoes",
    "Headphones"
];

function showSuggestions(value) {
    const dropdown = document.getElementById('search-suggestions');
    dropdown.innerHTML = '';
    if (value.trim() === '') {
        dropdown.style.display = 'none';
        return;
    }
    const filtered = suggestions.filter(item => item.toLowerCase().includes(value.toLowerCase()));
    if (filtered.length === 0) {
        dropdown.style.display = 'none';
        return;
    }
    filtered.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.style.padding = '8px 16px';
        li.style.cursor = 'pointer';
        li.onclick = () => {
            document.getElementById('search-product').value = item;
            dropdown.style.display = 'none';
        };
        dropdown.appendChild(li);
    });
    dropdown.style.display = 'block';
}

document.addEventListener('click', function(e) {
    if (!document.getElementById('search-cont').contains(e.target)) {
        document.getElementById('search-suggestions').style.display = 'none';
    }
});