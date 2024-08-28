

function addPost(){

    var postTitle = document.getElementById("post-title");
    var postDescription = document.getElementById("post-description");



    var posts = document.getElementById("posts");

     if(postTitle.value.trim() && postDescription.value.trim()){
        posts.innerHTML += `<div class="card  mt-3" id="post-card">
     <div class="card-header fontStyle">
          @Posts
        </div>
         <div class="card-body ">
          <h5 class="card-title fontStyle">${postTitle.value}</h5>
          <p class="card-text fontStyle">${postDescription.value}</p>


          <div>
          <button type="button" class="fontStyle btn btn-primary" onclick = "editPost(event)">Edit</button>
          <button type="button" class="fontStyle btn btn-danger" onclick = "remove(event)">Delete</button>
</div>
         </div>`
       



         posts.className += ' border-green';

       
           postTitle.value = "";
         postDescription.value = "";


    }else{

        Swal.fire({
            title: "No Input Value",
            text: "Write Something",
            icon: "question"
          });
    }
   
}


function remove(event){
    event.target.parentNode.parentNode.remove();


    
     posts.className -= ' border-green';
}




async function editPost(event) {

    var card = event.target.closest('.card');
    var titleElement = card.querySelector('.card-title');
    var descriptionElement = card.querySelector('.card-text');

    const { value: formValues } = await Swal.fire({
        title: "Update Post",
        html: `
         <label class=" fontStyle m-2 p-2">Update Title</label> 
         <input id="swal-input1" class=" fontStyle swal1-input" value="${titleElement.textContent}">
         <label class="fontStyle m-2 p-2">Update Description</label> 
         <input id="swal-input2" class="fontStyle swal1-input" value="${descriptionElement.textContent}">
        `,
        focusConfirm: false,
        preConfirm: () => {
            var editTitle = document.getElementById('swal-input1');
            var editDiscription = document.getElementById('swal-input2');
            return [
                editTitle = document.getElementById("swal-input1").value,
                editDiscription = document.getElementById("swal-input2").value
            ];
        }
    });

    titleElement.textContent = formValues[0];
    descriptionElement.textContent = formValues[1];

    postTitle = titleElement.innerHTML;
    postDescription = descriptionElement.innerHTML;


}



function bg1() {
    var postCard = document.getElementById('post-card');
    postCard.className += " bg-1"
}

function bg2() {
    var postCard = document.getElementById('post-card');
    postCard.className += " bg-2"
}

function bg3() {
    var postCard = document.getElementById('post-card');
    postCard.className += " bg-3"
}

function bg4() {
    var postCard = document.getElementById('post-card');
    postCard.className += " bg-4"
}

function bg5() {
    var postCard = document.getElementById('post-card');
    postCard.className += " bg-5"
}