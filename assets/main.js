function toast({title = '', message = '', type='info', duration=3000}) {
    const main = document.getElementById('toast')
    if(main) {
        const toast = document.createElement('div') // tạo ra 1 thẻ div 

        // auto remove toast (bản chất là xóa toast ra khỏi DOM)
        const autoRemoveID = setTimeout(() => {
            main.removeChild(toast) 
        },duration + 1000)

        //  remove toast when click
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) // nếu bấm trúng nút close thì
            {
                main.removeChild(toast) 
                clearTimeout(autoRemoveID)
            }
        }

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle',

        }
        const icon = icons[type];
        const delay = (duration/1000).toFixed(2)

        toast.classList.add('toast',`toast--${type}`)   // đặt thẻ div có class là toast
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut ease 1s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close ">
                <i class="fa fa-times"></i>
            </div>
        ` 

        main.appendChild(toast)  // thêm toàn bộ thẻ toast vào bên trong main
    }
}



function showSuccessToast() {
    toast({
        title: 'Thành công !',
        message: 'Bạn đã đăng ký thành công tài khoản tại F8.',
        type: 'success',
        duration:5000
    })
}

function showErrorToast() {
    toast({
        title: 'Thất bại !',
        message: 'Có lỗi xảy ra vui lòng liên hê quản trị viên',
        type: 'error',
        duration:5000
    })
}