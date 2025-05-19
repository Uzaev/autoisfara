document.addEventListener('DOMContentLoaded', () => {
    const carsContainer = document.getElementById('cars-container');
    const searchInput = document.getElementById('search');
    const brandFilter = document.getElementById('brand-filter');

    // Загрузка данных (можно заменить на fetch к API)
    fetch('cars.json')
        .then(response => response.json())
        .then(cars => {
            displayCars(cars);
            
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filteredCars = cars.filter(car => 
                    car.name.toLowerCase().includes(searchTerm) ||
                    car.brand.toLowerCase().includes(searchTerm)
                );
                displayCars(filteredCars);
            });

            brandFilter.addEventListener('change', (e) => {
                const selectedBrand = e.target.value;
                const filteredCars = selectedBrand === 'all' 
                    ? cars 
                    : cars.filter(car => car.brand.toLowerCase() === selectedBrand);
                displayCars(filteredCars);
            });
        });

    function displayCars(cars) {
        carsContainer.innerHTML = '';
        cars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'car-card';
            carCard.innerHTML = `
                <img src="images/${car.image}" alt="${car.name}">
                <div class="car-info">
                    <h3>${car.brand} ${car.name}</h3>
                    <p>Год: ${car.year}</p>
                    <p>Цена: $${car.price}</p>
                    <p>Двигатель: ${car.engine}</p>
                    <p>Рейтинг: <span class="rating">${car.rating}/5</span></p>
                </div>
            `;
            carsContainer.appendChild(carCard);
        });
    }
});
