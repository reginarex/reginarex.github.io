function grabChangelog() {
    return fetch('http://beriwanravandi.me/changelog.json/', {
        mode: 'cors'
    }).then(function(response) {
        return response.json();
    });
}

function grabProjects() {
    return fetch('http://beriwanravandi.me/projects.json/', {
        mode: 'cors'
    }).then(function(response) {
        return response.json();
    });
}

function grabFeatures() {
    return fetch('http://beriwanravandi.me/features.json/', {
        mode: 'cors'
    }).then(function(response) {
        return response.json();
    });
}

function changelog() {
    var h = document.getElementById('changelog');
    grabChangelog().then(function(response) {
        document.getElementsByClassName('loading')[0].classList.add('hide');
        response.data.forEach(function(x) {
            h.innerHTML += '<li class="' +
                '"><div class="left">' + x.date +
                '</div><div class="desc"><div>' + x.description.what + ' ' +
                '<strong>' + x.description.emphasis + '</strong></div><div class="info">' +
                x.description.info + '</div></div></li>';
        });
    });
}

function projects() {
    var h = document.getElementById('projects');
    grabProjects().then(function(response) {
        document.getElementsByClassName('loading')[0].classList.add('hide');
        response.data.forEach(function(x) {
            h.innerHTML += '<li class="' +
                '"><div class="left">' + x.date +
                '</div><div class="desc"><div>' + x.description.what + ' ' +
                '<strong>' + x.description.emphasis + '</strong></div><div class="info">' +
                x.description.info + '</div></div></li>';
        });
    });
}

function features() {
    var h = document.getElementById('features');
    grabFeatures().then(function(response) {
        document.getElementsByClassName('loading')[0].classList.add('hide');
        response.data.forEach(function(x) {
            h.innerHTML += '<li class="' +
                '"><div class="left">' + x.date +
                '</div><div class="desc"><div>' + x.description.what + ' ' +
                '<strong>' + x.description.emphasis + '</strong></div><div class="info">' +
                x.description.info + '</div></div></li>';
        });
    });
}

function expandGroups(event) {
    var els = document.getElementsByClassName('title');
    Array.prototype.forEach.call(els, function(el) {
        el.addEventListener(event, function() {
            el.parentElement.classList.toggle('expand');
            if (el.classList.contains('flash')) {
                el.classList.remove('flash');
            }
        }, false);
    });
}

(function() {
    window.addEventListener('load', function() {
        changelog();
        projects();
        features();
        expandGroups('click');
    }, false);
})();
