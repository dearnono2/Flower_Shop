// 강남역 위도  37.504487 경도 127.048957


var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스

const t_on = document.querySelectorAll('.traffic li')[0];
const t_off = document.querySelectorAll('.traffic li')[1];

let zoom = true;



var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.497952, 127.027619), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.497952, 127.027619); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커 지도위에 표시
marker.setMap(map);



// 교통 정보
t_on.addEventListener('click', (e) => {
  e.preventDefault();
  if(t_on.classList.contains('on')) return;

  map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); 
  t_on.classList.add('on');
  t_off.classList.remove('on');
})

t_off.addEventListener('click', (e) => {
  e.preventDefault();
  if(t_off.classList.contains('on')) return;
  map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
  t_off.classList.add('on');
  t_on.classList.remove('on');
})




function moveTo(target) {
  var moveLatlon = target;
  map.setCenter(target);
}


// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();


function setZoomable(zoom) {
  map.setZoomable(zoom);
}
