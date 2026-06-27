import React from 'react'

const RightText = () => {
  const reviews = [
  {
    id: 1,
    desc: "The company offers a great work-life balance, supportive teammates, and excellent learning opportunities for career growth.",
    review: "Satisfied",
  },
  {
    id: 2,
    desc: "Employees feel the company pays less than the market average despite having demanding responsibilities and high expectations.",
    review: "Undervalued",
  },
  {
    id: 3,
    desc: "The company has exciting projects and good benefits, but teams are often understaffed, leading to increased workload.",
    review: "Underbooked",
  },
];
  return reviews.map((review,idx) => (
    <div key={review.id} className="py-3 px-18 bg-amber-500">
      <h1>{review.id}</h1>
      <p>{review.desc}</p>
      <p>{review.review}</p>
    </div>
  ))
}

export default RightText