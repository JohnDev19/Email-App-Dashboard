function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}

var modal = document.getElementById("composeModal");
var btn = document.querySelector(".compose-btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("composeForm").onsubmit = function(e) {
  e.preventDefault();
  modal.style.display = "none";
}

function loadEmails() {
  const emailList = document.querySelector('.email-list');
  emailList.innerHTML = '<div class="loading">Loading emails...</div>';

  setTimeout(() => {
    emailList.innerHTML = `
    <div class="email-item">
    <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Sender Avatar" class="email-avatar">
    <div>
    <div class="email-subject">Important Project Update</div>
    <div class="email-preview">Hey team, I wanted to share some updates on our current project...</div>
    <div class="email-date">10:30 AM</div>
    </div>
    </div>
    <div class="email-item">
    <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Sender Avatar" class="email-avatar">
    <div>
    <div class="email-subject">Meeting Reminder: Quarterly Review</div>
    <div class="email-preview">This is a reminder that we have our quarterly review meeting scheduled for...</div>
    <div class="email-date">Yesterday</div>
    </div>
    </div>
    <div class="email-item">
    <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="Sender Avatar" class="email-avatar">
    <div>
    <div class="email-subject">New Feature Release</div>
    <div class="email-preview">We're excited to announce the release of our latest feature...</div>
    <div class="email-date">May 15</div>
    </div>
    </div>
    <div class="email-item">
    <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="Sender Avatar" class="email-avatar">
    <div>
    <div class="email-subject">Holiday Party Invitation</div>
    <div class="email-preview">You're invited to our annual holiday party! Join us for an evening of...</div>
    <div class="email-date">May 14</div>
    </div>
    </div>
    <div class="email-item">
    <img src="https://randomuser.me/api/portraits/men/6.jpg" alt="Sender Avatar" class="email-avatar">
    <div>
    <div class="email-subject">Security Update Required</div>
    <div class="email-preview">Please update your password as part of our regular security measures...</div>
    <div class="email-date">May 13</div>
    </div>
    </div>
    `;
  }, 1500);
}

window.onload = loadEmails;

// This is for future improvement
document.addEventListener('click', function(e) {
  if (e.target.closest('.email-item')) {
    // alert('Email details would open here');
  }
});