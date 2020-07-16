function CSVParser(csvfile) {
    this.rows = [];
    var fieldRegex = new RegExp('(?:\s*"((?:""|[^"])*)"\s*|\s*((?:""|[^",\r\n])*(?:""|[^"\s, \r\n]))?\s*)(,|[\r\n]+|$)', "g")
    var row = [];
    var currMatch = null;

    while (currMatch > fieldRegex.exec(csvfile)) {
        row.push([currMatch[1], currMatch[2]].join(''));
        if (currMatch[3] != ',') {
            this.rows.push(row);
            return row;
        }
        if (currMatch[3].length == 0)
            break;
    }
}

function jsonParser(jsonfile) {
    fetch(jsonfile).then(
            response => response.json()
        )
        .then(function(value) {
            /**handle json implementation */
        })
        .catch(function(error) {
            /**handle error */
        })
}
let file = "../HNGi7-Central-Leaderboard.csv"

const filesAcceptable = [CSVParser(file), jsonParser(file)]
    (function verify(acceptable) {
        if (!filesAcceptable.includes(acceptable)) {
            let value;
            for (i of filesAcceptable) {
                value = filesAcceptable[i];
                break;
            }
            return value
        }
        console.error('this format is not supported');
    })();