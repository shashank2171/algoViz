var arr = [1,8,4,3,5,7,5,3,6,8,23,34,2,1,4];
var l = arr.length;

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
    li.style.borderTopRightRadius= "10px";
    li.style.borderBottomRightRadius= "10px";
    x.style.margin = "5px";
    bars.append(x);
    document.getElementById("d_"+c).append(li);
    c+=1;
});

async function bubbleSort(){
    
    for(var i=0; i<l; i++){
        for(var j=0; j<l-i-1; j++)
        {   var curr = document.getElementById(j);
            var curr2 = document.getElementById(j+1);
            curr.style.backgroundColor = "blue";
            curr2.style.backgroundColor = "red";
            if(arr[j]>arr[j+1])
            {   
                var temp = arr[j];
                arr[j] = arr[j+1];
                
                curr.innerText=arr[j];

                arr[j+1] = temp;
                
                curr2.innerText=arr[j+1];
                
                curr.style.width = document.getElementById(j).innerText/max*100+"%";
                curr2.style.width = document.getElementById(j+1).innerText/max*100+"%";
                
                
            }
            await new Promise(done => setTimeout(() => done(), 200));
            curr.style.backgroundColor = 'lightgrey';
            
            
        }
        document.getElementById(l-1).style.backgroundColor = "green";
        l-=1;
    }
}

async function insertionSort(){

    for(var i=1; i<l; i++){

        var t = arr[i];
        var j = i-1;

        var curr = document.getElementById(i);
        curr.style.backgroundColor = "blue";
        await new Promise(done => setTimeout(() => done(), 500));
        while (j >= 0 && arr[j] > t) {

            curr2 = document.getElementById(j+1);
            arr[j + 1] = arr[j];
            curr2.innerText = arr[j];
            curr2.style.width = document.getElementById(j).innerText/max*100+"%";
            j = j - 1;
            
                  
            
        }
        curr2 = document.getElementById(j+1);
        curr2.innerText=t;
        curr2.style.backgroundColor = "red";
        curr2.style.width = document.getElementById(j+1).innerText/max*100+"%";
        await new Promise(done => setTimeout(() => done(), 500)); 
        arr[j + 1] = t;
        curr.innerText = arr[i];
        curr.style.width = document.getElementById(i).innerText/max*100+"%";
        curr.style.backgroundColor = 'lightgrey';
        curr2.style.backgroundColor = 'lightgrey';
        
    }

    for(var i=0; i<l; i++){
        document.getElementById(i).style.backgroundColor="green";
        await new Promise(done => setTimeout(() => done(), 50));
    }
}

console.log(arr);