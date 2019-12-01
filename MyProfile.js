$(function() {
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar, #content').toggleClass('active');
    });
  });

// Start of Chat

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
//  End of Chat  

// start of logout
function openLogout() {
  document.getElementById("logoutModal").style.display = "block";
}

// end of logout
