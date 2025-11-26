// ====================================
// VIDEO DATA - Replace videoUrl sections with our personal youtube videos. Replace titles of malware with actual malware samples sources from Brandon.
// ====================================
const videos = [
    {
        id: 1,
        title: 'About Remnux and FlareVM',
        category: 'tools',
        thumbnail: 'https://img.youtube.com/vi/lRLDl6S9tMQ/maxresdefault.jpg',
        videoUrl: 'https://youtu.be/lRLDl6S9tMQ',
        description: 'Our video talking about Remnux and FlareVM.'
    },
    {
        id: 2,
        title: 'FLARE VM Tool Demonstration',
        category: 'tools',
        thumbnail: 'https://miro.medium.com/v2/resize:fit:1758/0*auUwP9gXZNr_INr8.png',
        videoUrl: 'https://youtu.be/qA0YcYMRWyI?si=K6T7WeAZ5x81g6be&t=5038',
        description: 'Overview of FLARE VM reverse engineering tools'
    },
    {
        id: 3,
        title: 'Formbook.exe Malware Analysis',
        category: 'malware',
        thumbnail: 'https://img.youtube.com/vi/6sFojpMDeVo/maxresdefault.jpg',
        videoUrl: 'https://youtu.be/6sFojpMDeVo',
        description: 'Observing behavior and processes of Formbook'
    },
    {
        id: 4,
        title: 'REMnux Toolkit Overview',
        category: 'tools',
        thumbnail: 'https://remnux.org/img/remnux-logo.png',
        videoUrl: 'https://youtu.be/_80fpeY-_AI?si=4Q-7BsShOM5ISe30&t=559',
        description: 'Introduction to REMnux malware analysis distribution'
    },
    {
        id: 5,
        title: 'Process Monitor',
        category: 'tools',
        thumbnail: 'https://png.pngtree.com/element_our/sm/20180518/sm_5afec9faea2b6.jpg',
        videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
        description: 'Using Process Monitor for runtime analysis'
    },
    {
        id: 6,
        title: 'Fieless malware analysis',
        category: 'tools',
        thumbnail: 'https://png.pngtree.com/element_our/sm/20180518/sm_5afec9faea2b6.jpg',
        videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
        description: 'Analyze how fileless malware affects RAM usage and hides'
    },
    {
        id: 7,
        title: 'Keylogger analysis',
        category: 'malware',
        thumbnail: 'https://w0.peakpx.com/wallpaper/603/539/HD-wallpaper-malware-hazard-red-gizzzi-hazard-symbol-black-labrano-malware.jpg',
        videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
        description: 'Analyze how keyloggers track and store keystrokes'
    }
];

// ====================================
// PAGE NAVIGATION
// ====================================
function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const selectedPage = document.getElementById(pageName + '-page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);
}

// ====================================
// VIDEO FILTERING
// ====================================
let currentFilter = 'all';

function filterVideos(category) {
    currentFilter = category;

    // Update filter button states
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Render filtered videos
    renderVideos();
}

function renderVideos() {
    const videoGrid = document.getElementById('video-grid');
    const filteredVideos = currentFilter === 'all'
        ? videos
        : videos.filter(v => v.category === currentFilter);

    if (filteredVideos.length === 0) {
        videoGrid.innerHTML = '<p style="text-align: center; color: #9ca3af; grid-column: 1/-1;">No videos found in this category.</p>';
        return;
    }

    videoGrid.innerHTML = filteredVideos.map(video => `
                <div class="video-card" onclick="openVideo('${video.videoUrl}')">
                    <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
                    <div class="video-card-body">
                        <span class="video-badge ${video.category === 'malware' ? 'badge-malware' : 'badge-tools'}">
                            ${video.category === 'malware' ? 'Malware' : 'Tools'}
                        </span>
                        <h3>${video.title}</h3>
                        <p>${video.description}</p>
                    </div>
                </div>
            `).join('');
}

function openVideo(videoUrl) {
    // Open video in new tab or create a modal
    // For now, just alert - replace with your preferred method
    if (videoUrl && videoUrl !== '#') {
        window.open(videoUrl, '_blank');
    } else {
        alert('Video URL not configured. Replace the placeholder URL in the JavaScript videos array.');
    }
}

// ====================================
// GUIDE ACCORDION
// ====================================
// ====================================
// GUIDE ACCORDION
// ====================================
function toggleGuide(header) {
    const guideCard = header.parentElement;
    const content = guideCard.querySelector('.guide-card-content');

    if (content) {
        content.classList.toggle('active');
    }
}

function toggleStep(header) {
    const guideStep = header.parentElement;
    const content = guideStep.querySelector('.guide-step-content');

    if (content) {
        content.classList.toggle('active');
    }
}

// ====================================
// INITIALIZE ON PAGE LOAD
// ====================================
document.addEventListener('DOMContentLoaded', function () {
    // Render initial videos
    renderVideos();

    // Mobile menu functionality (basic implementation)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            navbarMenu.style.display = navbarMenu.style.display === 'flex' ? 'none' : 'flex';
            if (navbarMenu.style.display === 'flex') {
                navbarMenu.style.flexDirection = 'column';
                navbarMenu.style.position = 'absolute';
                navbarMenu.style.top = '64px';
                navbarMenu.style.left = '0';
                navbarMenu.style.right = '0';
                navbarMenu.style.backgroundColor = '#111827';
                navbarMenu.style.padding = '1rem';
                navbarMenu.style.borderTop = '1px solid rgba(6, 182, 212, 0.2)';
            }
        });
    }
});
