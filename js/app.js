function sortPoints(prop) {
    return function(a, b) {
        if (a[prop] > b[prop]) return 1;
        else if (a[prop] < b[prop]) return 1;
        return 0;
    }
}

let leaders = document.querySelector('.leaders');
let others = document.querySelector(".section-2-container")
class JSONFetcher {
    getData() {
        fetch("../users.json")
            .then(response => {
                return response.json()
            })
            .then(data => {
                const html = data.map(user => {
                    return `<div class="col-sm-11 col-md-9 score ranking">
                    <div class="contents justify-content-between">
                        <p class="pad text-left">3</p>
                        <h4 class="pad">${user["FULL NAME"]}
                        </h4>
                        <i class="pad">${user["EMAIL"]}</i>
                        <b class="pad text-right">${user["TOTAL POINTS"]} points</b>
                    </div>
                </div>`
                }).join("");
                others.innerHTML = html;
            })
    }
}

const jsonfetcher = new JSONFetcher();
jsonfetcher.getData();