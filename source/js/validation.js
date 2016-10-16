$(document).ready(function() {
var validation = (function () {
    var init = function () {
            _setUpListeners();
        },
        validateForm = function (form) {
            // Проверяет, чтобы все поля формы были не пустыми. Если пустые - вызывает тултипы

            var elements = form.find('input, textarea').not('input[type="submit"]'),  // После find указываешь на какие элементы будет распространяться тултип
                valid = true;                                                         //после not я указала input submit, иначе возле кнопки появлялся тултип

            $.each(elements, function (index, element) {
                var $element = $(element),
                    value = $element.val();

                if (!value.length) {
                    _addError($element);
                    valid = false;
                }
            });

            return valid;
            console.log('Форма проверятся');

        },
    // У тебя в css должен быть класс .has-error ,  в нем прописаны стили для внешнего вида  элементов формы при ошибке
        _setUpListeners = function () { // Прослушивает все события
            // удаляем красную обводку у элементов форм по нажатию клавиши
            $('form').on('keydown', '.has-error', _removeError);
            // удаляем красную обводку у элементов форм по клику мышки
            $('form').on('click', '.has-error', _removeError);
            // при сбросе формы удаляем также: тултипы и обводку
            $('form').on('reset', _clearForm);

        },
        _removeError = function () {
            $(this).removeClass('has-error'); // Убирает красную обводку у элементов форм
        },
        _addError = function (element) {
            element.addClass('has-error');
            _createQtip(element, element.data('position'));
            console.log('Error');
        },
        _clearForm = function (e) { // Очищает форму
            var $form = $(this);

            $form.find('input').trigger('hideTooltip'); // удаляем тултипы у input
            $form.find('textarea').trigger('hideTooltip'); // удаляем тултипы y textarea
            $form.find('.has-error').removeClass('has-error'); // удаляем красную подсветку

        },
        _createQtip = function (element, position) { // Создаёт тултипы
            // позиция тултипа
            if (position === 'right') {
                position = {
                    my: 'left center',
                    at: 'right center'
                }
            } else {
                position = {
                    my: 'right center',
                    at: 'left center',
                    adjust: {
                        method: 'shift none'
                    }
                }
            }
            // инициализация тултипа
            element.qtip({
                content: {
                    text: function () {
                    
                       return $(this).data('content');
                    }
                },
                show: {
                    event: 'show'
                },
                hide: {
                    event: 'keydown click hideTooltip'
                },
                position: position,
                style: {
                    classes: 'tip-style qtip-rounded', // в css у меня есть класс tip-style с стилями для тултипов ( поставь у свойств !important )
                    tip: {
                        height: 20,
                        width: 20
                    }
                }
            }).trigger('show');
        };

    return {
        init: init,
        validateForm: validateForm
    };


}());
//Инициализация модуля validation
validation.init();
});
