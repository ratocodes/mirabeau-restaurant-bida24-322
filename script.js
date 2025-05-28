function showCarousel(id) {
    const carousels = document.querySelectorAll('.menu-carousel');
    carousels.forEach(c => c.style.display = 'none');
    document.getElementById(id).style.display = 'block';
  }
  
  <script>
  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".chef-row");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  });
</script>

 // Modal functionality
 const modal = document.getElementById("confirmationModal");
 const closeModal = document.querySelector(".close-btn");
 const reservationForm = document.getElementById("reservationForm");

 reservationForm.addEventListener("submit", function(event) {
   event.preventDefault();

   // Show confirmation modal on submit
   modal.style.display = "block";
 });

 // Close modal
 closeModal.addEventListener("click", function() {
   modal.style.display = "none";
 });

 // Close modal if clicked outside
 window.addEventListener("click", function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 });

 //for the toggle bar on the homepage//
  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
  }

