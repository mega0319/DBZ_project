console.log('DBZ')

$(document).ready(function(){


  done()
  createFighter()
})

function done(){
  $.ajax({
    method: "get",
    url: "http://localhost:3000/characters",
    success: function(data){
      data.forEach(function(char){
        $('.name').append(`<div class="row center">
        <div class="col s6">
          <div class="card center">
            <div class="card-image">
              <img src="http://icons.iconarchive.com/icons/musett/dragon-ballz/256/Dragon-Ball-icon.png">
              <span class="card-title">${char.name}</span>
            </div>
            <div class="card-content">
            </div>
            <div class="card-action">
            <button type="button" class="btn" data-id="${char.id}" id="info">More Info</button>
            </div>
          </div>
        </div>
      </div>
      `)
      })
    }
  }).then(moreInfo)
}


function moreInfo(){
  $('.btn#info').on('click', function(){
    var id = $(this).data("id")
    $.ajax({
      method: "get",
      url:`http://localhost:3000/characters/${id}`,
      success: function(data){
        $('.name').html(`
          <h5>${data.name}</h5>
          <ul>
            <li>${data.race}</li>
            <li>${data.power_level}</li>
            <li>${data.DOB}</li>
            <li>${data.special_techniques}</li>
          </ul>
          <a href="" src="location.reload()">Back</a>
          `)
      }
    })
  })
}

function createFighter(){


  $('#addCharacter').on('submit', function(event){
    event.preventDefault()
    const $name = $('#name').val()
    const $race = $('#race').val()
    const $power_level = $('#power_level').val()
    const $DOB = $('#DOB').val()
    const $special_techniques = $('#special_techniques').val()
    // debugger
    $.ajax({
      method: 'post',
      url: "http://localhost:3000/characters",
      data: { character: {
        name: $name,
        race: $race,
        power_level: $power_level,
        DOB: $DOB,
        special_techniques: $special_techniques
        }
      },
      success: function(data){
        $('.name').append(`<p>${data.name}</p><button type="button" class="btn" data-id="${data.id}" id="info">More Info</button>`)
      }
    })
  })

}

//
// .post(url)
// .then()
//
//
// .get(url)
// .then(function(){
//   $('#name').
// }).then(function(){
//   $('#button').on('click', function(){
//
//   })
// })
