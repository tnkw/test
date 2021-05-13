$(function(){
  
  $('.contact-form').submit(function(e) {
    //フォームの既定の動作をキャンセルする
    e.preventDefault();
    
    //フォームの入力値を変数に格納する
    var form_data = $('form').serialize();
    console.log(form_data);

    //フォームの入力内容をajaxにより送信する
    $.ajax ({
      url: 'send_mail.php',//送信先のURL
      type: 'POST',//POST送信
      // data: form_data,//送信するデータを指定
      data: {
        "name": $('[name="name"]').val(),
        "email": $('[name="email"]').val(),
        "comment": $('[name="comment"]').val(),
        "token": $('[ name="token"]').val(),
      },
      timeout: 60000,  //タイムアウトの設定 ms
      beforeSend: function (xhr, settings) {
        //リクエスト送信前にボタンを非活性化する
        $('.submit-btn').attr('disabled', true);
        //モーダルウィンドウの表示
        $('#modal').fadeIn();
      },
      complete: function(xhr, textStatus) {
        //モーダルウィンドウを消す
        $('#modal').fadeOut();
        //リクエスト送信が完了したら、ボタンの非活性化を解除する
        $('.submit-btn').attr('disabled', false);
      }
    }).done(function(data, textStatus, jqXHR) {
        //通信成功時の処理
        $('form')[0].reset();//フォームに入力している値をリセット 書かないと文字が残ったままになる
        $('#result').text(data);//send_mail.phpから返ってきたメッセージをHTMLに入れて表示する
    }).fail(function(jqXHR, textStatus, errorThrown) {
        //通信失敗時の処理
        $('#result').text('送信できませんでした');//失敗メッセージをHTMLに入れて表示する
    });
  });
});