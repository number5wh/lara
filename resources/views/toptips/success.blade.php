@if (Session::has('success'))
    <div id="successInf" hidden="hidden">{{Session::get('success')}}</div>
    <script>
        $(function(){
            var success = $("#successInf").html();
            $.toptip(success,'success');
        });
    </script>
@endif