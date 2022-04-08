$('body').append('<div class="alert-container"></div>')

function DJAlert(text, type=null, background=null,icon=null, custom=false, delay=5) {
  let alertType = {
    'success': {
      background: 'linear-gradient(133.63deg, #12EA0E -34.48%, #000000 221.73%)',
      icon: `<svg width="24" height="24" viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M428.403 228.161L270.883 388.201C263.043 396.041 252.766 400.002 242.485 400.002C232.364 400.002 222.204 396.163 214.403 388.482L131.926 308.443C116.164 292.923 116.004 267.603 131.563 251.923C147.083 236.122 172.403 236.04 188.083 251.56L242.243 303.521L371.603 171.761C387.283 156.159 412.56 156.038 428.201 171.558C443.881 187.199 443.963 212.48 428.4 228.16L428.403 228.161ZM280 0C125.36 0 0 125.36 0 280C0 434.64 125.36 560 280 560C434.64 560 560 434.64 560 280C560 125.36 434.64 0 280 0Z" fill="white"/></svg>`
    },
    'error': {
      background: 'linear-gradient(133.63deg, #EA0E0E -34.48%, #000000 221.73%)',
      icon: `<svg width="24" height="24" viewBox="0 0 532 532" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M266 0C119.28 0 0 119.28 0 266C0 412.72 119.28 532 266 532C412.72 532 532 412.72 532 266C532 119.28 412.72 0 266 0ZM389.2 337.12L337.122 389.198L266.001 318.077L194.88 389.198L142.802 337.12L213.923 265.999L142.802 194.878L194.88 142.8L266.001 213.921L337.122 142.8L389.2 194.878L318.079 265.999L389.2 337.12Z" fill="white"/></svg>`
    },
    'warning': {
      background: 'linear-gradient(319deg, #ba2d0b 0%, #fe7f2d 37%, #ffbf46 100%);',
      icon: `<svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M449.07,399.08,278.64,82.58c-12.08-22.44-44.26-22.44-56.35,0L51.87,399.08A32,32,0,0,0,80,446.25H420.89A32,32,0,0,0,449.07,399.08Zm-198.6-1.83a20,20,0,1,1,20-20A20,20,0,0,1,250.47,397.25ZM272.19,196.1l-5.74,122a16,16,0,0,1-32,0l-5.74-121.95v0a21.73,21.73,0,0,1,21.5-22.69h.21a21.74,21.74,0,0,1,21.73,22.7Z" fill="white"/></svg>`
    },
    'info': {
      background: 'linear-gradient(133.63deg, #0EB5EA -34.48%, #000000 221.73%)',
      icon: `<svg width="24" height="24" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M210 0C325.98 0 420 94.02 420 210C420 325.98 325.98 420 210 420C94.02 420 0 325.98 0 210C0 94.02 94.02 0 210 0ZM210 168C194.535 168 182 180.535 182 196V308C182 323.465 194.535 336 210 336C225.465 336 238 323.465 238 308V196C238 180.535 225.465 168 210 168ZM210 84C194.535 84 182 96.535 182 112C182 127.465 194.535 140 210 140C225.465 140 238 127.465 238 112C238 96.535 225.465 84 210 84Z" fill="white"/></svg>`
    },
    'debug':{
      background: 'linear-gradient(147deg, #a399b2 0%, #4d4855 74%)',
      icon: `<svg width="24" height="24" id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M29,15h-5.1c-0.1-1.2-0.5-2.4-1-3.5c1.9-1.5,3.1-3.7,3.1-6.1V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v0.4c0,1.8-0.8,3.4-2.2,4.5 c-0.5-0.7-1.2-1.2-1.9-1.7c0-0.1,0-0.1,0-0.2c0-2.2-1.8-4-4-4s-4,1.8-4,4c0,0.1,0,0.1,0,0.2c-0.7,0.5-1.3,1-1.9,1.7 C8.8,8.8,8,7.2,8,5.4V5c0-0.6-0.4-1-1-1S6,4.4,6,5v0.4c0,2.4,1.1,4.7,3.1,6.1c-0.5,1-0.9,2.2-1,3.5H3c-0.6,0-1,0.4-1,1s0.4,1,1,1 h5.1c0.1,1.2,0.5,2.4,1,3.5C7.1,21.9,6,24.2,6,26.6V27c0,0.6,0.4,1,1,1s1-0.4,1-1v-0.4c0-1.8,0.8-3.4,2.2-4.5 c1.5,1.8,3.5,2.9,5.8,2.9s4.4-1.1,5.8-2.9c1.4,1.1,2.2,2.7,2.2,4.5V27c0,0.6,0.4,1,1,1s1-0.4,1-1v-0.4c0-2.4-1.1-4.7-3.1-6.1 c0.5-1,0.9-2.2,1-3.5H29c0.6,0,1-0.4,1-1S29.6,15,29,15z"/></svg>`
    },
    null:{
      background: 'linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)',
      icon: `<svg width="24" height="24" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M29.4162,14.5905,17.41,2.5838a1.9937,1.9937,0,0,0-2.8192,0L2.5838,14.5905a1.9934,1.9934,0,0,0,0,2.819L14.5905,29.4162a1.9937,1.9937,0,0,0,2.8192,0L29.4162,17.41A1.9934,1.9934,0,0,0,29.4162,14.5905ZM21,18H11V14H21Z"/></svg>`
    }
  }
  if (custom){
    alertType[type] = {
      background,icon
    }
  }


  const selectedType = alertType[type]
  const alertBox = `
    <style>.progress {animation: alertProgress ${delay}s ease;}</style>
    <div style="background: ${selectedType.background};" class="dj-alert">
      <div class="content">${selectedType.icon}<h6>${text}</h6></div>
      <div class="bar"></div>
    </div>`

  $('.alert-container').append(alertBox)

  let alert = $('.dj-alert')
  let thisAlert = alert[alert.length - 1]
  $(thisAlert).fadeIn('ease', () => {
    $(thisAlert).children('.bar').addClass('progress')
    const toDelete = thisAlert
    setTimeout(() => {
      $(toDelete).fadeOut('slow', () => {
        toDelete.remove()
      })
    }, delay*1000);
  })
} 
