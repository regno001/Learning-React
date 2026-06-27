
const Right = () => {
  const arr=[{
    "id":1,
    "desc" :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto temporibus esse quasi nam? Sit corporis soluta laboriosam excepturi rerum',
    "btn":"staisfied"
  },
  {

  
  "id":2,
    "desc" :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto temporibus esse quasi nam? Sit corporis soluta laboriosam excepturi rerum',
    "btn":"underserved"
  },
   {

  
  "id":3,
    "desc" :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto temporibus esse quasi nam? Sit corporis soluta laboriosam excepturi rerum',
    "btn":"underbanked"
  }
]
  return arr.map(function(props){
   <div>
    <h3>{props.id}</h3>
    <p>{props.desc}</p>
    <button>{props.btn}</button>
   </div>
  }
  )
}

export default Right