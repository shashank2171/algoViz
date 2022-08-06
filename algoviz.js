var arr = [1,8,4,3,5,7,5,3,6,8,23,34,2,1,4];

var max = 0;
for(var i =0 ; i<arr.length; i++){
    if(max<arr[i]) max=arr[i];
}
console.log(max)
var bars = document.querySelector('#bars')
var c=0;
arr.forEach(function(e){
    var x = document.createElement('div');
    x.setAttribute('id', "d_"+c);
    x.setAttribute('class', "bar");
    var li = document.createElement('div');
    li.setAttribute('id',c);
    li.setAttribute('class', "in")
    li.innerText = e;
    li.style.width=(e/max*100)+"%";
    li.style.backgroundColor = "lightgrey";
    x.style.margin = "5px";
    bars.append(x);
    document.getElementById("d_"+c).append(li);
    c+=1;
});

async function sort(){
    var l = arr.length;
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length-i-1; j++)
        {   var curr = document.getElementById(j);
            var curr2 = document.getElementById(j+1);
            curr.style.backgroundColor = "blue";
            curr2.style.backgroundColor = "red";
            if(arr[j]>arr[j+1])
            {   
                var temp = arr[j];
                arr[j] = arr[j+1];
                
                curr.innerText=arr[j];
                
                console.log((arr[j]/max*100)+"%");
                
            
                arr[j+1] = temp;
                
                curr2.innerText=arr[j+1];
                
                
                
                
            }
            await new Promise(done => setTimeout(() => done(), 200));
            curr.style.backgroundColor = 'lightgrey';
            curr2.style.backgroundColor = 'lightgrey';
            curr.style.width = document.getElementById(j).innerText/max*100+"%";
            curr2.style.width = document.getElementById(j+1).innerText/max*100+"%";
        }
        document.getElementById(l-1).style.backgroundColor = "green";
        l-=1;
    }
}