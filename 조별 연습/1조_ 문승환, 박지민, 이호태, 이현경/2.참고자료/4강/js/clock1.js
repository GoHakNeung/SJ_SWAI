class Clock {
    constructor(obj, width, height) {
        this.obj = obj;
        this.obj.setAttribute('width', width);
        this.obj.setAttribute('height', height);
        this.width = width;
        this.height = height;
        this.scaleRate = width / 387;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
    }

    setHour(hour) {
        this.hour = hour;
        this.updateClockHands();
    }

    setMinute(minute) {
        this.minute = minute;
        this.updateClockHands();
    }

    setSecond(second) {
        this.second = second;
        this.updateClockHands();
    }

    updateClockHands() {
        const hourHandRotation = 30 * this.hour + (this.minute / 60) * 30;
        const minuteHandRotation = 6 * this.minute;
        const secondHandRotation = 6 * this.second;

        this.hourHand.setAttribute(
            "transform",
            `rotate(${hourHandRotation} ${193 * this.scaleRate} ${193 * this.scaleRate}) scale(${this.scaleRate})`
        );
        this.minuteHand.setAttribute(
            "transform",
            `rotate(${minuteHandRotation} ${193 * this.scaleRate} ${193 * this.scaleRate}) scale(${this.scaleRate})`
        );
        this.secondHand.setAttribute(
            "transform",
            `rotate(${secondHandRotation} ${193 * this.scaleRate} ${193 * this.scaleRate}) scale(${this.scaleRate})`
        );
    }

    render() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");

        this.minuteHand = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        this.minuteHand.setAttribute("class", "minuteHand");
        this.minuteHand.setAttribute("fill", "#0000ff");
        this.minuteHand.setAttribute(
            "points",
            "196.2,193 190.2,193 190.2,55.2 193.2,50.2 196.2,55.2"
        );
        this.minuteHand.setAttribute("transform", `scale(${this.scaleRate})`);

        svg.appendChild(this.minuteHand);

        this.hourHand = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        this.hourHand.setAttribute("class", "hourHand");
        this.hourHand.setAttribute("stroke", "url(#hourBorder)");
        this.hourHand.setAttribute("fill", "#66767");
        this.hourHand.setAttribute(
            "points",
            "198.5,193 188,193 188,104.5 193.2,99.4 198.5,104.5"
        );
        svg.appendChild(this.hourHand);

        this.secondHand = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        this.secondHand.setAttribute("class", "secondHand");
        this.secondHand.setAttribute("fill", "#ff0000");
        this.secondHand.setAttribute(
            "points",
            "196.2,193 190.2,193 190.2,30.2 193.2,25.2 196.2,30.2"
        );
        this.secondHand.setAttribute("transform", `scale(${this.scaleRate})`);

        svg.appendChild(this.secondHand);

        const centerOutlinePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        centerOutlinePath.setAttribute("fill", "#999999");
        centerOutlinePath.setAttribute(
            "d",
            "M203.9,191.3c1.2,7.5-5.1,13.8-12.6,12.6c-4.5-0.7-8.2-4.4-8.9-8.9c-1.2-7.5,5.1-13.8,12.6-12.6 C199.6,183.1,203.2,186.8,203.9,191.3z"
        );
        centerOutlinePath.setAttribute("transform", `scale(${this.scaleRate})`);

        svg.appendChild(centerOutlinePath);

        const centerFilledCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        centerFilledCircle.setAttribute("class", "centerFilled");
        centerFilledCircle.setAttribute("fill", "#999999");
        centerFilledCircle.setAttribute("stroke", "#FFFFFF");
        centerFilledCircle.setAttribute("stroke-width", "3.5496");
        centerFilledCircle.setAttribute("stroke-miterlimit", "10");
        centerFilledCircle.setAttribute("cx", "193.2");
        centerFilledCircle.setAttribute("cy", "193.1");
        centerFilledCircle.setAttribute("r", "7.9");
        centerFilledCircle.setAttribute("transform", `scale(${this.scaleRate})`);

        svg.appendChild(centerFilledCircle);

        this.obj.appendChild(svg);
    }

    running(n){
        if(n==1){
            var clockRun = setInterval(()=>{
                this.setSecond(second++)
            },1000)
        }
        else if(n==2) {
            clearInterval(clockRun);
        }
        else return false;
    }
}



