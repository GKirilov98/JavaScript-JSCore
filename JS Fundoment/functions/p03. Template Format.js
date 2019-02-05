function tempFormat(arr) {
    console.log(`<?xml version="1.0" encoding="UTF-8"?>
<quiz>`);
    for (i = 0; i < arr.length; i += 2) {
        console.log(`    <question>
    ${arr[i]}
  </question>
  <answer>
    ${arr[i + 1]}
  </answer>`)
    }
    console.log('</quiz>')
}