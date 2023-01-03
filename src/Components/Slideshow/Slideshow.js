import React from 'react';

export function Slideshow() {
    let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
    return(
          <div>
            <div className="slideshow-container">

            <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src="https://images.unsplash.com/photo-1421091242698-34f6ad7fc088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" style="width:100%"></img>
            <div className="text">Caption Text</div>
            </div>

            <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src="https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" style="width:100%"></img>
            <div className="text">Caption Two</div>
            </div>

            <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1348&q=80" style="width:100%"></img>
            <div className="text">Caption Three</div>
            </div>

            <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a className="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <br></br>

            <div style="text-align:center">
            <span className="dot" onclick="currentSlide(1)"></span>
            <span className="dot" onclick="currentSlide(2)"></span>
            <span className="dot" onclick="currentSlide(3)"></span>
            </div>
          </div>
    )
}