import Card from "./components/card"


const App = () => {
  return (
 <>
 <div className="parent">
<Card img='https://imgs.search.brave.com/R979K2QkR3eQF9V2SXAZ8mqKIgOJDz-CbWrZ_BQzAnE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzU2LzAwLzkz/LzM2MF9GXzQ1NjAw/OTMyMl9ucWZqQm1i/VjJwak0xTXdNNmJi/WFdPcTZpQWl2QWNK/ai5qcGc' name='Apple' job='Software Engneering' l1='Freshers' l2='senior' rate='$200/hr' />
  
  <Card
    img="https://logo.clearbit.com/google.com"
    name="Google"
    job="Frontend Developer"
    l1="React"
    l2="Remote"
    rate="$180k"
  />

  <Card
    img="https://logo.clearbit.com/amazon.com"
    name="Amazon"
    job="Software Development Engineer"
    l1="Java"
    l2="Full-Time"
    rate="$200k"
  />

  <Card
    img="https://logo.clearbit.com/microsoft.com"
    name="Microsoft"
    job="Backend Engineer"
    l1=".NET"
    l2="Hybrid"
    rate="$190k"
  />

  <Card
    img="https://logo.clearbit.com/apple.com"
    name="Apple"
    job="iOS Developer"
    l1="Swift"
    l2="On-Site"
    rate="$210k"
  />

  <Card
    img="https://logo.clearbit.com/meta.com"
    name="Meta"
    job="Full Stack Engineer"
    l1="Node.js"
    l2="React"
    rate="$220k"
  />
  <Card
    img="https://logo.clearbit.com/netflix.com"
    name="Netflix"
    job="Cloud Engineer"
    l1="AWS"
    l2="Senior"
    rate="$230k"
  />
 </div>
 
</>
  )
}

export default App