
function capataliz() {
        String.prototype.ucfirst = function()
        {
            return this.charAt(0).toUpperCase() + this.substr(1);
        }
    var srting = document.getElementById('test').value;

    if(srting==""){
        alert('پر کنید');
    }else {
        alert(srting.ucfirst());
    }
    }
