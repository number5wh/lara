@if (count($errors) > 0)
    @foreach ($errors->all() as $error)
        <div id="errorInf" hidden="hidden">{{$error}}</div>
        <script>
            $(function(){
                var error = $("#errorInf").html();
                $.toptip(error,'error');
            });
        </script>
    @endforeach
@endif