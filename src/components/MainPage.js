import React from "react"
import NavBar from "./NavBar"



const MainPage = () => {
     return(
          
          <div>
               <header>
                    <div className="container">
                         <div className="row">
                              <div className="col-2">
                              <a href="#" className="main-logo text-decoration-none">Dustlikdon.uz</a>
                              </div>
                              
                              <div className="col-4">
                              <div className="relative">
                                   <input type="text" className="form-control" placeholder="Saytdan izlash" />
                                   <div className="absolute">
                                   <img src="./img/search.png" alt="dfff" />
                                   </div>
                                   
                              </div>
                              </div>

                              <div className="col-4 offset-1">
                                   <div className="row align-items-center">
                                        <div className="col-4">
                                             <a href="#" className="switch-lang">На русском</a>
                                        </div>
                                        {/*  */}
                                        <div className="col-8">
                                             <button type="button" className="btn">
                                                  <img src="./img/phone.png" alt="ssff" />
                                                  99872 335-41-16
                                                  </button>
                                        </div>
                                   </div>

                              </div>

                              
                         </div>
                    </div>
               </header>
               {/* stop header */}
               <NavBar />
               <main>
                    <div className="container">
                         <div className="row">
                              <div className="col-8 left-side">
                                   <div className="card">
                                        <div className="card-body">

                                             <ul className="nav">
                                                  <li className="nav-item">
                                                       <a href="#" className="nav-link social">Jamiyat hqida</a>
                                                  </li>
                                                  {/*  */}
                                                  <li className="nav-item">
                                                       <a href="#" className="nav-link">
                                                            <img src="./img/calendar.png" alt="dfdf"/>
                                                            16:48 / 12.11.20
                                                       </a>
                                                  </li>
                                                  {/*  */}
                                                  <li className="nav-item">
                                                       <a href="#" className="nav-link">
                                                            <img src="./img/eye.png" alt="dfdf"/>
                                                            321
                                                       </a>
                                                  </li>
                                                  {/*  */}
                                                  <li className="nav-item">
                                                       <a href="#" className="nav-link">
                                                            <img src="./img/statistic.png" alt="dfdf"/>
                                                            100
                                                       </a>
                                                  </li>
                                                  
                                             </ul>
                                        
                                        <h6>Eksport qiluvchi tadbirkorlik subektlariga!!!</h6>
                                        <p>“O‘zdonmaxsulot” aksiyadorlik kompaniyasi tizim korxonalari tomonidan istisno tariqasida maxalliy tadbirkorlik sub'ektlariga eksport qilish sharti bilan birja savdolari orqali bug’doy sotilmoqda.
                                        Bug’doy 2019 yil 1 sentyabrgacha 1 tonnasining boshlangich narxi qo‘shilgan qiymat solig’isiz 1 610 000 so‘mdan, qo‘shilgan  qiymat solig’ini xisobga olgan xolda 1 932 000 so‘mdan sotiladi.
                                        Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat soligi stavkasini qo‘llash natijasida xosil bo‘lgan qo‘shilgan                                         qiymat soligining ortiqcha summasi Adliya vazirligi tomonidan 2016 yil 7 aprelda 2775-son bilan ro‘yxatga olingan Nizomga asosan qaytarib beriladi.</p>
                                        
                                        

                                        </div>
                                        
                                        
                                        <div className="card-footer bg-white border-0">
                                      
                                        <div className="d-flex justify-content-between align-items-center">
                                             <h5>Mavzuga izohlar</h5>
                                             <span>2 ta fikr</span>
                                        </div>
                                        
                                        <div className="row align-items-center comments">
                                             <div className="col-2 w-100">
                                             <img src="./img/Rectangle 64.png" alt="fdd"/>
                                             </div>
                                             {/*  */}
                                             <div className="col-10">
                                             <textarea className="form-control" placeholder="Izoh qoldirishingiz mumkin" />

                                             </div>
                                        </div>

                                    <div className="d-flex align-items-center ask-question mt-4">

                                         <div>
                                         <img src="./img/Rectangle 66.png" alt="sv" className="main-img" />
                                         </div>
                                         <div>
                                              <h4>Nigina Karimova</h4>
                                              <p>Tushunmovchilik bo’yicha qayerga murojaat qilsam bo’ladi?</p>
                                              <div className="d-flex justify-content-between align-items-center">
                                                   <div>
                                                        <img src="./img/heart.png" alt="dfdfd" className="mr-4" />
                                                        <a href="#">Javob qaytarish</a>
                                                   </div>
                                                   <div>
                                                        <a href="#">15 daq avval</a>
                                                   </div>
                                              </div>
                                         </div>


                                    </div>         
                                    {/*  */}
                                    <div className="d-flex align-items-center ask-question mt-4">

<div>
<img src="./img/Rectangle 67.png" alt="sv" className="main-img" />
</div>
<div>
     <h4>Sahar Kenjayev</h4>
     <p>Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat soligi stavkasini qo‘llash natijasida xosil bo‘lgan qo‘shilgan qiymat soligining ortiqcha  batafsil <a href="#">Batafsil</a></p>
     <div className="d-flex justify-content-between align-items-center">
          <div>
               <img src="./img/red-heart.png" alt="dfdfd" className="mr-4" />
               <a href="#">Javob qaytarish</a>
          </div>
          <div>
               <a href="#">2 soat avval</a>
          </div>
     </div>
</div>


</div> 
                                             


                                        


                                        </div>
                                   </div>
                              </div>
                              {/*  */}
                              <div className="col-4 right-side">
                                   <div className="card">
                                        <div className="card-header bg-white border-0">
                                             <h3>Media</h3>
                                        </div>
                                        <div className="card-body">
                                             <div className="main-news">
                                                  <div className="d-flex align-items-center justify-content-between">
                                                       <div>
                                                            <ul className="nav">
                                                                 <li className="nav-item">
                                                                      <a href="#" className="nav-link text-decoration-none pl-0">
                                                                      <img src="./img/calendar.png" alt="ddv" />
                                                                      16:48 / 12.11.20

                                                                      </a>
                                                                 </li>
                                                            </ul>                                       
                                                       </div>
                                                       <a className="photos text-decoration-none" href="#">Fotogalereya</a>
                                                       
                                                  </div>
                                                  <a href="#">
                                                 "DO`STLIKDONMAXSULOTLARI" 
                                                  AJ boshqaruv raisi...
                                                  </a>
                                             </div>
                                             {/*  */}
                                             <div className="main-news">
                                                  <div className="d-flex align-items-center justify-content-between">
                                                       <div>
                                                            <ul className="nav">
                                                                 <li className="nav-item">
                                                                      <a href="#" className="nav-link text-decoration-none pl-0">
                                                                      <img src="./img/calendar.png" alt="ddv" />
                                                                      16:48 / 12.11.20

                                                                      </a>
                                                                 </li>
                                                            </ul>                                       
                                                       </div>
                                                       <a className="photos text-decoration-none" href="#">Fotogalereya</a>
                                                       
                                                  </div>
                                                  <a href="#">
                                                 "DO`STLIKDONMAXSULOTLARI" 
                                                  AJ boshqaruv raisi...
                                                  </a>
                                             </div>
                                             {/*  */}
                                             <div className="main-news">
                                                  <div className="d-flex align-items-center justify-content-between">
                                                       <div>
                                                            <ul className="nav">
                                                                 <li className="nav-item">
                                                                      <a href="#" className="nav-link text-decoration-none pl-0">
                                                                      <img src="./img/calendar.png" alt="ddv" />
                                                                      16:48 / 12.11.20

                                                                      </a>
                                                                 </li>
                                                            </ul>                                       
                                                       </div>
                                                       <a className="photos text-decoration-none" href="#">Fotogalereya</a>
                                                       
                                                  </div>
                                                  <a href="#">
                                                 "DO`STLIKDONMAXSULOTLARI" 
                                                  AJ boshqaruv raisi...
                                                  </a>
                                             </div>
                                             {/*  */}
                                             <div className="main-news">
                                                  <div className="d-flex align-items-center justify-content-between">
                                                       <div>
                                                            <ul className="nav">
                                                                 <li className="nav-item">
                                                                      <a href="#" className="nav-link text-decoration-none pl-0">
                                                                      <img src="./img/calendar.png" alt="ddv" />
                                                                      16:48 / 12.11.20

                                                                      </a>
                                                                 </li>
                                                            </ul>                                       
                                                       </div>
                                                       <a className="photos text-decoration-none" href="#">Fotogalereya</a>
                                                       
                                                  </div>
                                                  <a href="#">
                                                 "DO`STLIKDONMAXSULOTLARI" 
                                                  AJ boshqaruv raisi...
                                                  </a>
                                             </div>
                                        </div>

                                   </div>
                                   {/*  */}

                                   <div className="col-12 complaint">
                                        <div className="d-flex flex-column text-center">
                                             <h3>Shikoyatlar mavjudmi? Onlayn tarzda yuboring</h3>
                                             <div className="col-6">
                                             <img src="./img/my-gov.png" alt="dvdv" className="w-100" />
                                             </div>
                                             <p>Davlat interaktiv xizmatlari yagona portali</p>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </div>
               </main>
               {/* stop main */}

               <section>
                    <div className="container">
                         <div className="row">
                              <div className="col-12 d-flex justify-content-between align-items-center latest-news">

                                   <div><a href="#">So’nggi yangiliklar</a></div>

                                   <div>
                                        <img src="./img/Group 6.png" alt="dfd" />
                                        {/*  */}
                                        <img src="./img/Group 7.png" alt="dfd" className="ml-3" />

                                   </div>

                              </div>
                         
                         
                         <div className="col-4">
                              <div className="card border-0">
                                  
                                        <img src="./img/Rectangle 11.png" alt="dfd" className="w-100" />                       

                                        <div className="card-body">
                                        <ul className="nav">
                                                  
                                                  {/*  */}
                                                  <li className="nav-item">
                                                       <a href="#" className="nav-link">
                                                            <img src="./img/calendar.png" alt="dfdf"/>
                                                            16:48 / 12.11.20
                                                       </a>
                                                  </li>
                                                  {/*  */}
                                                  <li className="nav-item">
                                                       <a href="#" className="nav-link">
                                                            <img src="./img/eye.png" alt="dfdf"/>
                                                            321
                                                       </a>
                                                  </li>
                                                  {/*  */}
                                                  <li className="nav-item">
                                                       <a href="#" className="nav-link">
                                                            <img src="./img/statistic.png" alt="dfdf"/>
                                                            100
                                                       </a>
                                                  </li>
                                                  
                                             </ul>
                                        
                                        <h2>E'lon!!!</h2>
                                        <a href="#" className="title d-block">"DO`STLIKDONMAXSULOTLARI" AJ ning
                                        aksiyadorlari diqqatiga! 2020-yil 27-mart
                                        kuni soat 9:00 dan...</a>
                                        <a href="#" className="more-info">Batafsil</a>
                                        </div>

                              </div>
                         </div>
                         {/*  */}

                         <div className="col-4">
                              <div className="card border-0">
                                  
                                        <img src="./img/Rectangle 27.png" alt="dfd" className="w-100" />                       

                                        <div className="card-body">
                                        <ul className="nav">
                                                  
                                                  {/*  */}
                                                  <li className="nav-item">
                                                       <a href="#" className="nav-link">
                                                            <img src="./img/calendar.png" alt="dfdf"/>
                                                            16:48 / 12.11.20
                                                       </a>
                                                  </li>
                                                  {/*  */}
                                                  <li className="nav-item">
                                                       <a href="#" className="nav-link">
                                                            <img src="./img/eye.png" alt="dfdf"/>
                                                            321
                                                       </a>
                                                  </li>
                                                  {/*  */}
                                                  <li className="nav-item">
                                                       <a href="#" className="nav-link">
                                                            <img src="./img/statistic.png" alt="dfdf"/>
                                                            100
                                                       </a>
                                                  </li>
                                                  
                                             </ul>
                                        
                                        <h2>Xisobot: Buxgalteriya balansi 2 kvartal</h2>
                                        <a href="#" className="title d-block">Buxgalteriya 
                                        balansi 2 kvartal bo’yichafoto jamlanma.</a>
                                        <a href="#" className="more-info">Batafsil</a>
                                        </div>

                              </div>
                         </div>
                         {/*  */}

                         <div className="col-4">
                              <div className="card border-0">
                                  
                                        <img src="./img/Rectangle 18.png" alt="dfd" className="w-100" />                       

                                        <div className="card-body">
                                        <ul className="nav">
                                                  
                                                  {/*  */}
                                                  <li className="nav-item">
                                                       <a href="#" className="nav-link">
                                                            <img src="./img/calendar.png" alt="dfdf"/>
                                                            16:48 / 12.11.20
                                                       </a>
                                                  </li>
                                                  {/*  */}
                                                  <li className="nav-item">
                                                       <a href="#" className="nav-link">
                                                            <img src="./img/eye.png" alt="dfdf"/>
                                                            321
                                                       </a>
                                                  </li>
                                                  {/*  */}
                                                  <li className="nav-item">
                                                       <a href="#" className="nav-link">
                                                            <img src="./img/statistic.png" alt="dfdf"/>
                                                            100
                                                       </a>
                                                  </li>
                                                  
                                             </ul>
                                        
                                        <h2>"DO`STLIKDONMAXSULOTLARI" AJboshqaruv raisi...</h2>
                                        <a href="#" className="title d-block">"DO`STLIKDONMAXSULOTLARI" AJ ning
boshqaruv raisi tomonidan Do’stlik
tumanidagi 2-sonli...</a>
                                        <a href="#" className="more-info">Batafsil</a>
                                        </div>

                              </div>
                         </div>
                         
                         </div>
                    </div>
               </section>
               {/* stop section */}

               <footer>
                    <div className="container">
                         <div className="row">
                              <div className="col-3">
                                   <h3>Dustlikdon.uz</h3>
                                   <p>Jizzax viloyati Do‘stlik tumani 
                                        Sanoatchilar MFY Sanoat ko‘chasi 49</p>
                              </div>
                              {/*  */}
                              <div className="col-2">
                                   <h3>Asosiy</h3>
                                   <ul className="nav flex-column">
                                        <li className="nav-item">
                                             <a href="#" className="nav-link">
                                             Jamiyat haqida
                                             </a>
                                        </li>
                                        {/*  */}
                                        <li className="nav-item">
                                             <a href="#" className="nav-link">
                                             Struktura
                                             </a>
                                        </li>
                                        {/*  */}
                                        <li className="nav-item">
                                             <a href="#" className="nav-link">
                                             Yangiliklar
                                             </a>
                                        </li>
                                   </ul>
                              </div>
                              {/*  */}
                              <div className="col-3">
                                   <h3>Xizmatlar</h3>
                                   <ul className="nav flex-direction">
                                        <li className="nav-item">
                                             <a href="#" className="nav-link">
                                             Elektron murojaatlar
                                             </a>
                                        </li>
                                        {/*  */}
                                        <li className="nav-item">
                                             <a href="#" className="nav-link">
                                             Interaktiv xizmatlar
                                             </a>
                                        </li>
                                        {/*  */}
                                        <li className="nav-item">
                                             <a href="#" className="nav-link">
                                             Saytdan izlash
                                             </a>
                                        </li>
                                   </ul>
                              </div>
                               {/*  */}
                               <div className="col-4">
                                    <h3>Bog’lanish</h3>
                                   <ul className="nav flex-column">
                                       <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                 <img src="./img/number.png" alt="ssf" className="pr-2" />
                                                 998 71 335 41 16
                                            </a>
                                       </li>
                                       {/*  */}
                                       <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                 <img src="./img/message.png" alt="ssf" className="pr-2" />
                                                 info@dustlikdon.uz
                                            </a>
                                       </li>
                                   </ul>
                               </div>
                         <div className="line"></div>
                         </div>
                   
                   </div>
               </footer>
               {/* stop footer */}
               
          </div>
          

     )
}

export default MainPage