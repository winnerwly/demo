var eventHandler = {
	// 事件添加
	addEvent: function(element, type, func) {　　
		if (element.addEventListener) {　　
			element.addEventListener(type, func, false);　　
		} else if (element.detachEvent) {　　
			element.attachEvent('on' + type, func);　　
		} else {　　
			element['on' + type] = func;　　
		}　　
	},
	// 事件移除
	removerEvent: function(element, type, func) {　　
		if (element.removeEventListener) {　　
			element.removeEventListener(type, func, false);　　
		} else if (element.detachEvent) {　　
			element.detachEvent('on' + type, func);　　
		} else {　　
			element['on' + type] = null;　　
		}　　
	},
	// 得多事件对象
	getEvent: function(event) {
		//或event=eventwindow.event; 非IE:event,IE:window.event
		return event ? event : window.event;
	},
	// 获取事件类型
	getType: function(event) {
		//非IE与IE相同
		return event.type;
	},
	// 获取事件对象的触发元素
	getElement: function(event) {
		//非IE:event.target，IE:event.srcElement
		return event.target || event.srcElement;
	},
	// 阻止默认事件
	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault(); //非IE方法处理
		} else {
			event.returnValue = false; //IE方法处理
		}
	},
	// 禁止冒泡传播
	stopPropagation: function(event) {
		if (event.stopPropagation) {
			event.stopPropagation(); //非IE方法处理
		} else {
			event.cancelBubble = true; //IE方法处理
		}
	}

}　　