var count = 1;
if (localStorage.getItem('count')) {
  count = localStorage.getItem('count');
}

// 이전 문제
$(".prev-btn").click(function () {
  count--;
  if (count == 0) {
    count = 1;
    alert("첫 번째 문제입니다.");
  }
  localStorage.setItem('count', count);
  location.href = "http://localhost:3000/solve/" + count;
})

// 다음 문제
$(".next-btn").click(function () {
  count++;
  if (count > 5) {
    count = 5;
    alert("마지막 문제입니다.");
  }
  localStorage.setItem('count', count);
  location.href = "http://localhost:3000/solve/" + count;
})

// 정답 체크
$("#checkBtn").click(function (e) {
  var answer = $(".answer")[0].value;
  var q_id = $("#checkBtn")[0].dataset.value;
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/solve/" + q_id,
    data: {"answer": answer},
    success: function (response) {
      if (response == true) {
        $(".check-answer").html("정답입니다.");
      } else {
        $(".check-answer").html("틀렸습니다.");
      }
    },
    error: function (request, error) {
      console.log(error);
    }
  });
  e.preventDefault();
})

// 모달
var modal = document.getElementById('myModal');
var btn = document.getElementById('checkBtn');
var close = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
close.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
