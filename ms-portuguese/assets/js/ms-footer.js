document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
      <div class="footer">
          <div class="footer-outer">
              <div class="container position-relative">
                  <div class="footer-top accordion" role="tablist" id="accordionExample">
                      <div class="fnav-widget position-relative footer-logo">
                          <div class="g2-logo text-center footer-logo-group mb-3">
                              <a href="https://www.g2.com/products/marketing-star/" target="_blank" class="footer-logo-group position-relative">
                                  <img src="assets/images/high-perfomance.svg" class="footer-logo1 ft-logo me-5" alt="G2 2025 High performer badge 1" width="100" height="50" loading="lazy" />
                                  <img src="assets/images/fastest-implementation.svg" class="footer-logo2 ft-logo" alt="G2 2025 Fastest implementation badge" width="100" height="50" loading="lazy" />
                              </a>
                          </div>
                          <div class="g2-logo text-center footer-logo-group">
                              <a href="https://www.g2.com/products/marketing-star/" target="_blank" class="footer-logo-group position-relative">
                                  <img src="assets/images/g2-high-performer-logo.svg" class="footer-logo3 ft-logo" alt="G2 2025 High performer badge 2" width="100" height="50" loading="lazy" />
                              </a>
                          </div>
                      </div>
  
                      <div class="fnav-widget">
                          <div data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                              aria-controls="collapseOne" role="tab" class="taber">
                              Produto
                          </div>
                          <div id="collapseOne" class="accordion-collapse collapse show"
                              data-bs-parent="#accordionExample">
                              <ul>
                                  <li><a href="email-marketing.html">E-mail</a></li>
                                  <li><a href="sms-marketing.html">Mensagem de Texto</a></li>
                                  <li><a href="whatsapp-marketing.html">WhatsApp</a></li>
                                  <li><a href="qr-code-generator.html">Código QR</a></li>
                                  <li><a href="form-generator.html">Formulários Online</a></li>
                                  <li><a href="analytics.html">Análises e Relatórios</a></li>
                                  <li><a href="template-builder.html">Criador de Templates</a></li>
                                  <li><a href="data-enricher.html">Enriquecedor de Dados</a></li>
                              </ul>
                          </div>
                      </div>
  
                      <div class="fnav-widget">
                          <div data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true"
                              aria-controls="collapseTwo" role="tab" class="taber">
                              Soluções
                          </div>
                          <div id="collapseTwo" class="accordion-collapse collapse show"
                              data-bs-parent="#accordionExample">
                              <ul>
                                  <li><a href="beginner.html">Explorador</a></li>
                                  <li><a href="intermediate.html">Intermediário</a></li>
                                  <li><a href="advanced.html">Avançado</a></li>
                                  <li><a href="industry.html">Industrial</a></li>
                              </ul>
                          </div>
                      </div>
  
                      <div class="fnav-widget">
                          <div data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true"
                              aria-controls="collapseThree" role="tab" class="taber">
                              Resources
                          </div>
                          <div id="collapseThree" class="accordion-collapse collapse show"
                              data-bs-parent="#accordionExample">
                              <ul>
                                  <li><a href="resources.html">Blogs</a></li>
                                  <li><a href="whats-new.html">O que há de novo</a></li>
                                  <li><a href="live-webinars.html">Webinars</a></li>
                              </ul>
                          </div>
                      </div>
  
                      <div class="fnav-widget">
                          <div data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true"
                              aria-controls="collapseFour" role="tab" class="taber">
                              About
                          </div>
                          <div id="collapseFour" class="accordion-collapse collapse show"
                              data-bs-parent="#accordionExample">
                              <ul>
                                  <li><a href="about-us.html">Nossa história</a></li>
                                  <li><a href="request-demo.html">Entre em Contato</a></li>
                              </ul>
                          </div>
                      </div>
  
                      <div class="fnav-widget">
                          <div data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true"
                              aria-controls="collapseFive" role="tab" class="taber">
                              Planos
                          </div>
                          <div id="collapseFive" class="accordion-collapse collapse show"
                              data-bs-parent="#accordionExample">
                              <ul>
                                  <li><a href="pricing.html">Nossos preços</a></li>
                                  <li><a href="support-service.html">Atendimento ao Cliente</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
          <div class="footer-bottom">
              <div class="container">
                  <div class="fb-card d-flex justify-content-between flex-wrap align-items-center">
                      <div class="copy-txt d-flex">
                          Copyright © 2026 Marketing Star
                          <div>
                              <span class="d-none d-md-inline-block">&nbsp;| </span>
                              <a href="privacy-policy.html">Privacy Policy</a> | 
                              <a href="cookie-policy.html">Cookie Policy</a> | 
                              <a href="terms-and-conditions.html">T&C</a> | 
                              <a href="help.html">Help</a>
                          </div>
                      </div>
                      <div class="social-media d-flex">
                          <a href="https://www.facebook.com/marketingstar.io/" target="_blank" class="rounded-circle d-flex align-items-center justify-content-center">
                              <img src="assets/images/fb.svg" alt="Facebook" width="30" height="30" loading="lazy" />
                          </a>
                          <a href="https://www.instagram.com/marketingstar.io/" target="_blank" class="rounded-circle d-flex align-items-center justify-content-center">
                              <img src="assets/images/instagram.svg" alt="Instagram" width="30" height="30" loading="lazy" />
                          </a>
                          <a href="https://www.linkedin.com/company/marketingstar/" target="_blank" class="rounded-circle d-flex align-items-center justify-content-center">
                              <img src="assets/images/linkedin.svg" alt="LinkedIn" width="30" height="30" loading="lazy" />
                          </a>
                          <a href="https://www.youtube.com/@Mktg-Star" target="_blank" class="rounded-circle d-flex align-items-center justify-content-center">
                              <img src="assets/images/youtube.svg" alt="Youtube" width="30" height="30" loading="lazy" />
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `; 
    document.getElementById("global-footer").innerHTML = footerHTML;
  });