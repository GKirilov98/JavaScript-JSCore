(function (){
    String.prototype.ensureStart = function (word) {
       let sentence = this.valueOf();
      if (sentence.indexOf(word) !== 0){
           sentence = word + sentence;
      }
       return sentence;
    };

    String.prototype.ensureEnd = function (word) {
        let sentence = this.valueOf();
        if (sentence.indexOf(word) === -1){
            sentence = sentence + word;
        }
        return sentence;
    };

    String.prototype.isEmpty = function () {
       let stringLength = this.length;
       return stringLength <= 0;
    };

    String.prototype.truncate = function (n) {
        if(n <= 3){
            return ".".repeat(n);
        }
        if(this.toString().length <= n){
            return this.toString();
        } else {
            let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
            if(lastIndex !== -1){
                return this.toString().substr(0, lastIndex) + "...";
            } else {
                return this.toString().substr(0, n-3) + "...";
            }
        }
    };

    String.format = function () {
       let sentence = arguments[0];

        for (let i = 1; i < arguments.length; i++) {
            let regex = new RegExp('[{]' + (i-1) + '[}]', 'g');
            sentence = sentence.replace(regex, `${arguments[i]}`);
        }
        return sentence;
    }
})();

var testString = 'the quick brown fox jumps over the lazy dog';
testString = testString.truncate(10);
console.log(testString);
