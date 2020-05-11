jQuery.fn.extend({
    check: function($checkboxs, $unCheck) {
        let $allCHk = this;
        // 全选
        this.click(function() {
            $($checkboxs).prop('checked', this.checked);
        });
        // 反选
        if ($unCheck) {
            $unCheck.click(function() {
                $($checkboxs).each(function() {
                    this.checked = !this.checked;
                })
                subChangeParent();
            })
        }
        // 点击子复选框
        $checkboxs.click(function() {
            subChangeParent();
        })

        function subChangeParent() {
            let allCheck = true;
            $($checkboxs).each(function() {
                if (this.checked != true) {
                    allCheck = false;
                }
            })
            $allCHk.prop('checked', allCheck);
        }
    }
});