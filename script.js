const oneHeader = document.querySelector("#one");
const oneChild = document.querySelector("#one_child");

oneHeader.addEventListener('click', () => {

    oneChild.style.display = "block";
    twoChild.style.display = "none";
    threeChild.style.display = "none";
    fourChild.style.display = "none";
    // window.location.reload(oneChild);
   
});

const twoHeader = document.querySelector("#two");
const twoChild = document.querySelector("#two_child");

twoHeader.addEventListener('click', () => {
    oneChild.style.display = "none";
    twoChild.style.display = "block";
    threeChild.style.display = "none";
    fourChild.style.display = "none";
    // window.location.reload(twoChild);
});

const threeHeader = document.querySelector("#three");
const threeChild = document.querySelector("#three_child");

threeHeader.addEventListener('click', () => {
    oneChild.style.display = "none";
    twoChild.style.display = "none";
    threeChild.style.display = "block";
    fourChild.style.display = "none";
    // window.location.onload(threeChild);
});

const fourHeader = document.querySelector("#four");
const fourChild = document.querySelector("#four_child");

fourHeader.addEventListener('click', () => {
    fourChild.style.display = "block";
    oneChild.style.display = "none";
    twoChild.style.display = "none";
    threeChild.style.display = "none";
    
});


const removeAllchild2 = document.querySelector(".remove_child2")

removeAllchild2.addEventListener('click', () => {
    oneChild.style.display = "none";
    twoChild.style.display = "none";
    threeChild.style.display = "none";
    fourChild.style.display = "none";

    
 

})

oneHeader.addEventListener('mouseover', () => {
    oneChild.style.display = "block";
    twoChild.style.display = "none";
    threeChild.style.display = "none";
    fourChild.style.display = "none"

})

twoHeader.addEventListener('mouseover', () => {
    oneChild.style.display = "none";
    twoChild.style.display = "block";
    threeChild.style.display = "none";
    fourChild.style.display = "none"
})

threeHeader.addEventListener('mouseover', () => {
    oneChild.style.display = "none";
    twoChild.style.display = "none";
    threeChild.style.display = "block";
    fourChild.style.display = "none"
})

fourHeader.addEventListener('mouseover', () => {
    oneChild.style.display = "none";
    twoChild.style.display = "none";
    threeChild.style.display = "none";
    fourChild.style.display = "block"
})

removeAllchild2.addEventListener('mouseover', () => {
    oneChild.style.display = "none";
    twoChild.style.display = "none";
    threeChild.style.display = "none";
    fourChild.style.display = "none"
    
})


// #######################################
// MOBILE PANNEL 1
//###############################
const mobile_slideIn = document.querySelector('.mobile_panel1');

const slidebtn = document.querySelector('.slide1');

slidebtn.addEventListener('click', () => {
   mobile_slideIn.style.display = 'block';
   
});

slidebtn.addEventListener('mouseover', () => {
    mobile_slideIn.style.display = 'block'; 
})

mobile_slideIn.addEventListener('mouseover', () => {
    mobile_slideIn.style.display = 'block'; 
})

mobile_slideIn.addEventListener('mouseout', () => {
    mobile_slideIn.style.display = 'none'; 
})




// #######################################
// MOBILE PANNEL 2
//###############################
const mobile_slideIn2 = document.querySelector('.mobile_panel2');

const slidebtn2 = document.querySelector('.slide2');

slidebtn2.addEventListener('click', () => {
   mobile_slideIn2.style.display = 'block';
   
});


slidebtn2.addEventListener('mouseover', () => {
    mobile_slideIn2.style.display = 'block'; 
})

mobile_slideIn2.addEventListener('mouseover', () => {
    mobile_slideIn2.style.display = 'block'; 
})

mobile_slideIn2.addEventListener('mouseout', () => {
    mobile_slideIn2.style.display = 'none'; 
})




// #######################################
// MOBILE PANNEL 3
//###############################
const mobile_slideIn3 = document.querySelector('.mobile_panel3');

const slidebtn3 = document.querySelector('.slide3');

slidebtn3.addEventListener('click', () => {
   mobile_slideIn3.style.display = 'block';
   
});


slidebtn3.addEventListener('mouseover', () => {
    mobile_slideIn3.style.display = 'block'; 
})

mobile_slideIn3.addEventListener('mouseover', () => {
    mobile_slideIn3.style.display = 'block'; 
})

mobile_slideIn3.addEventListener('mouseout', () => {
    mobile_slideIn3.style.display = 'none'; 
})




// #######################################
// MOBILE PANNEL 4
//###############################
const mobile_slideIn4 = document.querySelector('.mobile_panel4');

const slidebtn4 = document.querySelector('.slide4');

slidebtn4.addEventListener('click', () => {
   mobile_slideIn4.style.display = 'block';
   
});


slidebtn4.addEventListener('mouseover', () => {
    mobile_slideIn4.style.display = 'block'; 
})

mobile_slideIn4.addEventListener('mouseover', () => {
    mobile_slideIn4.style.display = 'block'; 
})

mobile_slideIn4.addEventListener('mouseout', () => {
    mobile_slideIn4.style.display = 'none'; 
})

slidebtn4.addEventListener('mouseout', () => {
    mobile_slideIn4.style.display = 'none';
})

// ###########################################
// MOBILE PANNEL 5

const mobile_slideIn5 = document.querySelector('.mobile_panel5');

const slidebtn5 = document.querySelector('.slide5');

slidebtn5.addEventListener('click', () => {
   mobile_slideIn5.style.display = 'block';
   
});


slidebtn5.addEventListener('mouseover', () => {
    mobile_slideIn5.style.display = 'block'; 
})

mobile_slideIn5.addEventListener('mouseover', () => {
    mobile_slideIn5.style.display = 'block'; 
})

mobile_slideIn5.addEventListener('mouseout', () => {
    mobile_slideIn5.style.display = 'none'; 
})



// ##############################################
// MOBILE HEADERS Modal

const mobile_headers = document.querySelector('.mobile_header');
const nested_headers = document.querySelector('.nested_headers');
const close_header = document.querySelector('.close_header');


mobile_headers.addEventListener('click', () => {
    nested_headers.showModal();
    
});

if (close_header && nested_headers) {

close_header.addEventListener('click', () => {
        nested_headers.close();
});

} else {
    console.error('Dialog or button not found something is wrong about my js flow')
}


// #############################################
// OPEN MOBILE SECTIONS

const openBtnsect1 = document.querySelector('.open_sect1');
const openBtnsect2 = document.querySelector('.open_sect2');
const openBtnsect3 = document.querySelector('.open_sect3');
const openBtnsect4 = document.querySelector('.open_sect4');

const nested_sect1 = document.querySelector('.nested_sections1');
const nested_sect2 = document.querySelector('.nested_sections2');
const nested_sect3 = document.querySelector('.nested_sections3');
const nested_sect4 = document.querySelector('.nested_sections4');

const close_section1 = document.querySelector('.close_section1');

const close_section2 = document.querySelector('.close_section2');

const close_section3 = document.querySelector('.close_section3');

const close_section4 = document.querySelector('.close_section4');

close_section1.addEventListener('click', () => {
    
    nested_sect1.close();
})

close_section2.addEventListener('click', () => {
    
    nested_sect2.close();
})
close_section3.addEventListener('click', () => {
    
    nested_sect3.close();
})
close_section4.addEventListener('click', () => {
    
    nested_sect4.close();
})
openBtnsect1.addEventListener('click', () => {
    nested_sect1.showModal()
})

openBtnsect2.addEventListener('click', () => {
    nested_sect2.showModal()
})

openBtnsect3.addEventListener('click', () => {
    nested_sect3.showModal()
})

openBtnsect4.addEventListener('click', () => {
    nested_sect4.showModal()
})