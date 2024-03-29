import {Component, HostListener, OnInit} from '@angular/core';
import {faArrowRight, faBars} from "@fortawesome/free-solid-svg-icons";
import {NavigationService} from "../../shared/services/navigation.service";
import {contactMail} from "../../shared/constants";

@Component({
    selector: 'landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
    faArrowRight = faArrowRight;
    faBars = faBars;
    scrollOn = false;
    backgroundSize: number = 100;
    prev: number = 0;
    waveDesktop = 'assets/images/wave_desktop.svg';
    waveMobile = 'assets/images/wave_mobile.svg';

    constructor(private navigationService: NavigationService) {
    }

    ngOnInit(): void {
        this.prev = window.scrollY;
        window.addEventListener('scroll', e => this.handleNavigation(e));
    }

    mouseLeave() {
        this.scrollOn = false;
    }

    mouseEnter() {
        this.scrollOn = true;
    }

    handleNavigation = (e: any) => {
        if (this.scrollOn) {
            const window = e.currentTarget;
            if (this.prev > window.scrollY) {
                if (this.backgroundSize < 100) this.backgroundSize += 30;
            } else if (this.prev < window.scrollY) {
                if (this.backgroundSize > 40) this.backgroundSize -= 30;
            }
            this.prev = window.scrollY;
        }
    };

    scrollTo(id: string) {
        this.navigationService.scrollTo(id);
    }

    protected readonly contactMail = contactMail;
}
