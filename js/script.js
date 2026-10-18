// ===== MOBILE MENU =====
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
  }
}

// ===== CLASS DATA =====
const classData = {
  'strength-training': {
    title: 'Strength Training',
    icon: 'fa-dumbbell',
    tagline: 'Build muscle and power with progressive overload.',
    description: 'Our Strength Training program is designed for anyone looking to build muscle, increase strength, and improve overall body composition. Using progressive overload principles, our expert coaches guide you through compound lifts like squats, deadlifts, and bench press with proper form and technique.',
    duration: '60 min',
    level: 'All Levels',
    calories: '400-600',
    benefits: [
      'Build lean muscle mass',
      'Increase bone density',
      'Boost metabolism',
      'Improve posture and stability',
      'Enhance athletic performance'
    ],
    includes: [
      'Personalized workout plan',
      'Form correction coaching',
      'Progress tracking',
      'Access to premium equipment'
    ],
    schedule: [
      'Monday, Wednesday, Friday — 6:00 AM',
      'Tuesday, Thursday — 7:00 PM'
    ]
  },
  'hiit-cardio': {
    title: 'HIIT Cardio',
    icon: 'fa-heartbeat',
    tagline: 'Burn fat and boost endurance in 45 minutes.',
    description: 'High-Intensity Interval Training (HIIT) combines short bursts of intense exercise with brief recovery periods. This efficient workout burns more calories in less time than traditional cardio, and continues burning fat for hours after your session ends.',
    duration: '45 min',
    level: 'Advanced',
    calories: '500-700',
    benefits: [
      'Maximum fat burn',
      'Improved cardiovascular health',
      'Increased endurance',
      'Afterburn effect (EPOC)',
      'Time-efficient workouts'
    ],
    includes: [
      'Heart rate monitoring',
      'Interval timer setup',
      'Motivating group energy',
      'Cool-down and stretching'
    ],
    schedule: [
      'Monday, Wednesday, Friday — 7:00 PM',
      'Saturday — 9:00 AM'
    ]
  },
  'yoga-flow': {
    title: 'Yoga & Flow',
    icon: 'fa-spa',
    tagline: 'Find balance, flexibility, and inner peace.',
    description: 'Our Yoga & Flow class combines traditional yoga poses with modern flow sequences to improve flexibility, balance, and mental clarity. Perfect for beginners and experienced yogis alike, this class focuses on breathwork, alignment, and mindful movement.',
    duration: '60 min',
    level: 'Beginner',
    calories: '200-350',
    benefits: [
      'Improved flexibility',
      'Better balance and posture',
      'Reduced stress and anxiety',
      'Enhanced mental clarity',
      'Injury prevention'
    ],
    includes: [
      'Guided meditation',
      'Breathing techniques',
      'Props provided',
      'Beginner-friendly instructions'
    ],
    schedule: [
      'Tuesday, Thursday — 8:00 AM',
      'Saturday — 9:00 AM'
    ]
  },
  'boxing': {
    title: 'Boxing',
    icon: 'fa-fist-raised',
    tagline: 'Learn technique, build power, and get fit.',
    description: 'Our Boxing class teaches proper technique in a fun, high-energy environment. Combining footwork, punching combinations, and conditioning drills, this class provides an incredible full-body workout while teaching real boxing skills.',
    duration: '50 min',
    level: 'Intermediate',
    calories: '450-650',
    benefits: [
      'Full-body workout',
      'Improved coordination',
      'Stress relief',
      'Self-defense skills',
      'Boosted confidence'
    ],
    includes: [
      'Hand wraps provided',
      'Bag work',
      'Pad work with partners',
      'Technique drills'
    ],
    schedule: [
      'Tuesday, Thursday — 6:30 PM',
      'Saturday — 11:00 AM'
    ]
  }
};

// ===== LOAD CLASS DETAILS PAGE =====
function loadClassDetail() {
  const container = document.getElementById('classDetail');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('class') || 'strength-training';
  const data = classData[slug];

  if (!data) {
    container.innerHTML = '<p style="text-align:center; padding: 60px 0;">Class not found.</p>';
    return;
  }

  container.innerHTML = `
    <div class="class-detail-hero">
      <div class="class-detail-icon">
        <i class="fas ${data.icon}"></i>
      </div>
      <span class="section-label">CLASS</span>
      <h1>${data.title}</h1>
      <p class="class-tagline">${data.tagline}</p>
    </div>

    <div class="class-detail-grid">
      <div class="class-detail-main">
        <h2>About This Class</h2>
        <p>${data.description}</p>

        <h2>What You'll Get</h2>
        <ul class="check-list">
          ${data.includes.map(item => `<li><i class="fas fa-check"></i> ${item}</li>`).join('')}
        </ul>

        <h2>Benefits</h2>
        <ul class="check-list">
          ${data.benefits.map(item => `<li><i class="fas fa-check"></i> ${item}</li>`).join('')}
        </ul>

        <h2>Schedule</h2>
        <div class="class-schedule-list">
          ${data.schedule.map(s => `<div class="schedule-line"><i class="fas fa-calendar-check"></i> ${s}</div>`).join('')}
        </div>

        <a href="contact.html" class="btn btn-primary" style="margin-top: 30px;">Book This Class <i class="fas fa-arrow-right"></i></a>
      </div>

      <aside class="class-detail-sidebar">
        <div class="sidebar-card">
          <h3>Quick Info</h3>
          <div class="sidebar-item"><span>Duration</span><strong>${data.duration}</strong></div>
          <div class="sidebar-item"><span>Level</span><strong>${data.level}</strong></div>
          <div class="sidebar-item"><span>Calories</span><strong>${data.calories}</strong></div>
        </div>
        <div class="sidebar-card cta-card">
          <h3>Start Today</h3>
          <p>Book your free trial class now.</p>
          <a href="contact.html" class="btn btn-primary btn-block">Book Free Trial</a>
        </div>
      </aside>
    </div>
  `;
}
// ===== CLASS SCHEDULE DATA =====
const schedule = [
  { day: 'Monday', name: 'Strength Training', time: '6:00 AM', trainer: 'Alex Carter', duration: '60 min' },
  { day: 'Monday', name: 'HIIT Cardio', time: '7:00 PM', trainer: 'Jordan Blake', duration: '45 min' },
  { day: 'Tuesday', name: 'Yoga & Flow', time: '8:00 AM', trainer: 'Maya Silva', duration: '60 min' },
  { day: 'Tuesday', name: 'Boxing', time: '6:30 PM', trainer: 'Jordan Blake', duration: '50 min' },
  { day: 'Wednesday', name: 'Strength Training', time: '6:00 AM', trainer: 'Alex Carter', duration: '60 min' },
  { day: 'Wednesday', name: 'HIIT Cardio', time: '7:00 PM', trainer: 'Jordan Blake', duration: '45 min' },
  { day: 'Thursday', name: 'Yoga & Flow', time: '8:00 AM', trainer: 'Maya Silva', duration: '60 min' },
  { day: 'Thursday', name: 'Boxing', time: '6:30 PM', trainer: 'Jordan Blake', duration: '50 min' },
  { day: 'Friday', name: 'Strength Training', time: '6:00 AM', trainer: 'Alex Carter', duration: '60 min' },
  { day: 'Friday', name: 'HIIT Cardio', time: '7:00 PM', trainer: 'Jordan Blake', duration: '45 min' },
  { day: 'Saturday', name: 'Yoga & Flow', time: '9:00 AM', trainer: 'Maya Silva', duration: '60 min' },
  { day: 'Saturday', name: 'Boxing', time: '11:00 AM', trainer: 'Jordan Blake', duration: '50 min' }
];

function renderSchedule(day = 'all') {
  const container = document.getElementById('scheduleTable');
  if (!container) return;

  const filtered = day === 'all' ? schedule : schedule.filter(s => s.day === day);

  if (filtered.length === 0) {
    container.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color: #999;">No classes this day.</p>';
    return;
  }

  container.innerHTML = filtered.map(s => `
    <div class="schedule-item">
      <div class="schedule-day">${s.day}</div>
      <h3>${s.name}</h3>
      <p><i class="fas fa-user"></i> ${s.trainer}</p>
      <p><i class="fas fa-clock"></i> ${s.duration}</p>
      <span class="schedule-time">${s.time}</span>
    </div>
  `).join('');
}

function initScheduleFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length === 0) return;

  renderSchedule('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSchedule(btn.dataset.day);
    });
  });
}

// ===== TRIAL FORM =====
function initTrialForm() {
  const form = document.getElementById('trialForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fields = ['name', 'email', 'phone', 'interest'];
    let valid = true;

    fields.forEach(id => {
      const input = document.getElementById(id);
      const error = input.nextElementSibling;
      if (!input.value.trim()) {
        if (error) error.classList.add('show');
        valid = false;
      } else {
        if (error) error.classList.remove('show');
      }
    });

    const email = document.getElementById('email');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      const error = email.nextElementSibling;
      if (error) {
        error.textContent = 'Please enter a valid email';
        error.classList.add('show');
      }
      valid = false;
    }

    if (valid) {
      form.reset();
      const success = document.getElementById('formSuccess');
      if (success) {
        success.classList.add('show');
        setTimeout(() => success.classList.remove('show'), 4000);
      }
    }
  });
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScheduleFilters();
  initTrialForm();
  loadClassDetail();
});