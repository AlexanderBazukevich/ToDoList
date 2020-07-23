export const template = `<div class="header">
<button class="button" type="button">
    <span class="icon">
        <i class="fas fa-chevron-left"></i>
    </span>
</button>
<h1 class="header__title">ToDo List</h1>
<button class="button" type="button">
    <span class="icon">
        <i class="fas fa-ellipsis-v"></i>
    </span>
</button>
</div>
<div class="content">
<form data-dom="add-note">
    <div class="control">
        <label class="control__label">
            <input class="control__field control__field_main control__field_action_append" type="text" placeholder="Add note">
            <button class="button" type="submit">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span>
            </button>
        </label>
    </div>
</form>
<div class="control-group">
    <div class="control-group__item control-group__item_w4">
        <div class="control">
            <label class="control__label">
                <input class="control__field" type="radio" name="group" hidden="true">
                <span class="icon icon_main icon_big icon_halo_main">
                    <i class="fas fa-briefcase"></i>
                </span>
                <span class="control__title control__title_small">Work</span>
            </label>
        </div>
    </div>
    <div class="control-group__item control-group__item_w4">
        <div class="control">
            <label class="control__label">
                <input class="control__field" type="radio" name="group" hidden="true" checked>
                <span class="icon icon_main icon_big icon_halo_main">
                    <i class="fas fa-user-graduate"></i>
                </span>
                <span class="control__title control__title_small">Study</span>
            </label>
        </div>
    </div>
    <div class="control-group__item control-group__item_w4">
        <div class="control">
            <label class="control__label">
                <input class="control__field" type="radio" name="group" hidden="true">
                <span class="icon icon_main icon_big icon_halo_main">
                    <i class="fas fa-home"></i>
                </span>
                <span class="control__title control__title_small">Home</span>
            </label>
        </div>
    </div>
    <div class="control-group__item control-group__item_w4">
        <div class="control">
            <label class="control__label">
                <input class="control__field" type="radio" name="group" hidden="true">
                <span class="icon icon_main icon_big icon_halo_main">
                    <i class="fas fa-shopping-bag"></i>
                </span>
                <span class="control__title control__title_small">Shopping</span>
            </label>
        </div>
    </div>
    <div class="control-group__item control-group__item_w4">
        <div class="control">
            <label class="control__label">
                <input class="control__field" type="radio" name="group" hidden="true">
                <span class="icon icon_main icon_big icon_halo_main">
                    <i class="fas fa-shopping-bag"></i>
                </span>
                <span class="control__title control__title_small">Shopping</span>
            </label>
        </div>
    </div>
</div>
</div>
[[tabs]]
<div class="modal">
<div class="header">
    <h1 class="header__title">Edit ToDo</h1>
</div>
<div class="modal__body">
    <form id="modal-form">
        <div class="control">
            <label class="control__label">
                <span class="control__title">Select date</span>
                <input class="control__field control__field_minor" type="date">
            </label>
        </div>
        <div class="control">
            <label class="control__label">
                <span class="control__title">Note content</span>
                <textarea class="control__field control__field_minor" style="height: 5rem;"></textarea>
            </label>
        </div>
        <div class="control">
            <label class="control__label">
                <span class="control__title">Group name</span>
                <input class="control__field control__field_minor" type="text">
            </label>
        </div>
        <div class="control">
            <label class="control__label">
                <span class="control__title">Group icon</span>
            </label>
        </div>
        <div class="control-group">
            <div class="control-group__item control-group__item_w6">
                <div class="control">
                    <label class="control__label control__label_vertical">
                        <input class="control__field" type="radio" name="group-m6" hidden="true">
                        <span class="icon icon_modal icon_small">
                            <i class="fas fa-briefcase"></i>
                        </span>
                    </label>
                </div>
            </div>
            <div class="control-group__item control-group__item_w6">
                <div class="control">
                    <label class="control__label control__label_vertical">
                        <input class="control__field" type="radio" name="group-m6" hidden="true" checked>
                        <span class="icon icon_modal icon_small">
                            <i class="fas fa-user-graduate"></i>
                        </span>
                    </label>
                </div>
            </div>
            <div class="control-group__item control-group__item_w6">
                <div class="control">
                    <label class="control__label control__label_vertical">
                        <input class="control__field" type="radio" name="group-m6" hidden="true">
                        <span class="icon icon_modal icon_small">
                            <i class="fas fa-home"></i>
                        </span>
                    </label>
                </div>
            </div>
            <div class="control-group__item control-group__item_w6">
                <div class="control">
                    <label class="control__label control__label_vertical">
                        <input class="control__field" type="radio" name="group-m6" hidden="true">
                        <span class="icon icon_modal icon_small">
                            <i class="fas fa-shopping-bag"></i>
                        </span>
                    </label>
                </div>
            </div>
            <div class="control-group__item control-group__item_w6">
                <div class="control">
                    <label class="control__label control__label_vertical">
                        <input class="control__field" type="radio" name="group-m6" hidden="true">
                        <span class="icon icon_modal icon_small">
                            <i class="fas fa-shopping-bag"></i>
                        </span>
                    </label>
                </div>
            </div>
            <div class="control-group__item control-group__item_w6">
                <div class="control">
                    <label class="control__label control__label_vertical">
                        <input class="control__field" type="radio" name="group-m6" hidden="true">
                        <span class="icon icon_modal icon_small">
                            <i class="fas fa-briefcase"></i>
                        </span>
                    </label>
                </div>
            </div>
            <div class="control-group__item control-group__item_w6">
                <div class="control">
                    <label class="control__label control__label_vertical">
                        <input class="control__field" type="radio" name="group-m6" hidden="true">
                        <span class="icon icon_modal icon_small">
                            <i class="fas fa-briefcase"></i>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    </form>
</div>
<div class="modal__footer">
    <button class="button" type="submit" form="modal-form">
        <span class="icon icon_main">
            <i class="fas fa-check"></i>
        </span>
    </button>
    <button class="button" type="button">
        <span class="icon icon_main">
            <i class="fas fa-times"></i>
        </span>
    </button>
</div>
</div>`