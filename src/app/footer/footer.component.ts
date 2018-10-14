import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') public canvas: ElementRef;
  private ctx: CanvasRenderingContext2D;
  private radius: number;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.ctx = canvasEl.getContext('2d');
    this.radius = canvasEl.height / 2;
    this.ctx.translate(this.radius, this.radius);
    this.radius = this.radius * 0.90;
    setInterval(() => this.drawClock(), 1000);
  }
  drawClock(): void {
    this.drawFace();
    this.drawNumbers();
    this.drawTime();
  }
  drawFace() {
    let grad;
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();
    grad = this.ctx.createRadialGradient(0, 0, this.radius * 0.95, 0, 0, this.radius * 1.05);
    grad.addColorStop(0, '#16cce1');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#16cce1');
    this.ctx.strokeStyle = grad;
    this.ctx.lineWidth = this.radius * 0.1;
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.radius * 0.1, 0, 2 * Math.PI);
    this.ctx.fillStyle = '#16cce1';
    this.ctx.fill();
  }

   drawNumbers() {
    let ang;
    let num;
    this.ctx.font = this.radius * 0.15 + 'px arial';
     this.ctx.textBaseline = 'middle';
     this.ctx.textAlign = 'center';
    for (num = 1; num < 13; num++) {
      ang = num * Math.PI / 6;
      this.ctx.rotate(ang);
      this.ctx.translate(0, -this.radius * 0.85);
      this.ctx.rotate(-ang);
      this.ctx.fillText(num.toString(), 0, 0);
      this.ctx.rotate(ang);
      this.ctx.translate(0, this.radius * 0.85);
      this.ctx.rotate(-ang);
    }
  }
  drawTime() {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) +
      (second * Math.PI / (360 * 60));
    this.drawHand(hour, this.radius * 0.5, this.radius * 0.07);
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    this.drawHand(minute, this.radius * 0.8, this.radius * 0.07);
    // second
    second = (second * Math.PI / 30);
    this.drawHand(second, this.radius * 0.9, this.radius * 0.02);
  }
   drawHand(pos, length, width) {
    this.ctx.beginPath();
    this.ctx.lineWidth = width;
    this.ctx.lineCap = 'round';
    this.ctx.moveTo(0, 0);
    this.ctx.rotate(pos);
    this.ctx.lineTo(0, -length);
    this.ctx.stroke();
    this.ctx.rotate(-pos);
  }


}
