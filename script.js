document.addEventListener('DOMContentLoaded', function () {
    const getUserBtn = document.getElementById('getUserBtn');
    const userInfoDiv = document.getElementById('userInfo');
  
    getUserBtn.addEventListener('click', function() {
      userInfoDiv.style.display = 'block'; // Показати блок інформації
      fetch('https://randomuser.me/api/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Нема відповіді');
          }
          return response.json();
        })
        .then(data => {
          const user = data.results[0];
          userInfoDiv.innerHTML = `
                      <img src="${user.picture.large}" alt="User Image">
                      <p>Країна: ${user.location.country}</p>
                      <p>Email: ${user.email}</p>
                      <p>Телефон: ${user.phone}</p>
                      <p>Координати: ${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}</p>
                  `;
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
          userInfoDiv.innerHTML = '<p>Виникла помилка при завантаженні інформації про користувача.</p>';
        });
    });
  });