import { Overlay } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Injectable } from "@angular/core";

import { ProgressSpinnerComponent } from "@shared/components/progress-spinner/progress-spinner.component";

export interface LoadingIndicatorRef {
    close(): void;
}

@Injectable({
    providedIn: "root",
})
export class LoadingIndicatorService {
    constructor(private readonly overlay: Overlay) {}

    /**
     * インジケータを開く
     *
     * @return インジケータ
     */
    open(): LoadingIndicatorRef {
        const portal = new ComponentPortal(ProgressSpinnerComponent);
        const overlayRef = this.overlay.create({
            width: "100%",
            height: "100%",
            panelClass: "app-loading-indicator",
        });
        overlayRef.attach(portal);
        const close = () => {
            overlayRef.detach();
            overlayRef.dispose();
        };
        return {
            close,
        };
    }
}
