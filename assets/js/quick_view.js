function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
  }
  
  // Ожидание полной загрузки DOM
  document.addEventListener('DOMContentLoaded', function () {
    // Получаем модальное окно
    var modal = document.getElementById('myModal');
  
    // Получаем элемент <span>, который закрывает модальное окно
    var span = document.getElementsByClassName("close")[0]; // Убедитесь, что это [0]!
  
    // Закрытие модального окна при клике вне его области
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  