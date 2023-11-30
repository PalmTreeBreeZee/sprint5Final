async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
  //const idCards = document.querySelector('div')
  //const h3 = document.querySelector('h3')
  // const learners = 'http://localhost:3003/api/learners'
  // const mentors = 'http://localhost:3003/api/mentors'
 
   const learnerResponse = await axios.get('http://localhost:3003/api/learners')
  const mentorResponse = await axios.get('http://localhost:3003/api/mentors')
  const learners = learnerResponse.data
  const mentors = mentorResponse.data
  
  const finalLearners = learners.map(learner =>{
    return {...learner, mentors: mentors.filter(mentor => learner.mentors.includes(mentor.id))}
    })
  
  manipCard(finalLearners)
  
  function manipCard(finalLearners){   
    
    finalLearners.forEach(dat => {
     let p = document.querySelector('p') 
     let div = document.querySelector('div')
     let div2 = document.createElement('div')
     let h3 = document.createElement('h3')
     let div3 = document.createElement('div')
     let h4 = document.createElement('h4')
     let ul = document.createElement('ul')
     let li = document.createElement('li')
     
    
     
     div.append(div2)
     div2.appendChild(h3)
     div2.appendChild(div3)
     div2.appendChild(h4)
     div2.appendChild(ul)
     ul.appendChild(li)
    
     
     div2.addEventListener('click', () =>{
      let cards = document.querySelectorAll('.card')
      const isSelected = div2.classList.contains('selected')
      for(let card of cards){
      card.classList.remove('selected')
      }
      if(!isSelected){
         div2.classList.add('selected')
         p.textContent = 'The selected learner is ' + dat.fullName
         h3.textContent = dat.fullName + ', ID ' + dat.id
      } 
      else{
        p.textContent = 'No learner is selected'
      }
     })
     
    h4.addEventListener('click', () => {
      
      if(h4.classList.contains('closed')){
        h4.classList.remove('closed')
        h4.classList.add('open')
      } else {
        h4.classList.remove('open')
        h4.classList.add('closed')
      }
      return

    })
     div2.classList.add('card')
     h4.classList.add('closed')
     li.textContent = dat.mentors[0]['firstName'] + ' ' + dat.mentors[0]['lastName']
     
     if(dat.mentors.length === 2){
      let li2 = document.createElement('li')
      ul.appendChild(li2)
      console.log('yes2')
      li2.textContent = dat.mentors[1]['firstName'] + ' ' + dat.mentors[1]['lastName']
     } else if(dat.mentors.length === 3){
      let li2 = document.createElement('li')
      ul.appendChild(li2)
      li2.textContent = dat.mentors[1]['firstName'] + ' ' + dat.mentors[1]['lastName']
     
      let li3 = document.createElement('li')
      ul.appendChild(li3)
      li3.textContent = dat.mentors[2]['firstName'] + ' ' + dat.mentors[2]['lastName']
     } else if(dat.mentors.length === 4){
      let li2 = document.createElement('li')
      ul.appendChild(li2)
      li2.textContent = dat.mentors[1]['firstName'] + ' ' + dat.mentors[1]['lastName']
     
      let li3 = document.createElement('li')
      ul.appendChild(li3)
      li3.textContent = dat.mentors[2]['firstName'] + ' ' + dat.mentors[2]['lastName']

      let li4 = document.createElement('li')
      ul.appendChild(li4)
      li4.textContent = dat.mentors[3]['firstName'] + ' ' + dat.mentors[3]['lastName']
     } 
     console.log(dat.mentors)
     h3.textContent = dat.fullName
     div3.textContent = dat.email
     h4.textContent = 'Mentors'
     p.textContent = 'No learner is selected'
     
    })
    return finalLearners
  }
 

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
