function sortArr(arr) {
    console.log(arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n"));
}

sortArr(['alpha',
    'beta',
    'gamma']
)