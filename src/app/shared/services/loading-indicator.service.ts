import { Overlay, OverlayRef } from "@angular/cdk/overlay";
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
    /**
     * プロセス数
     */
    numberOfProcess = 0;

    /**
     * Portal化したインジケータコンポーネント
     */
    portal!: ComponentPortal<ProgressSpinnerComponent>;

    /**
     * overlayへの参照
     */
    overlayRef!: OverlayRef;

    constructor(private readonly overlay: Overlay) {}

    /**
     * インジケータを開く
     */
    open() {
        this.numberOfProcess++;
        if (this.numberOfProcess <= 1) {
            this.portal = new ComponentPortal(ProgressSpinnerComponent);
            this.overlayRef = this.overlay.create({
                width: "100%",
                height: "100%",
                panelClass: "app-loading-indicator",
            });
            this.overlayRef.attach(this.portal);
        }
    }

    /**
     * インジケータを閉じる
     */
    close() {
        this.numberOfProcess--;
        if (this.numberOfProcess < 1) {
            this.overlayRef.detach();
            this.overlayRef.dispose();
        }
    }
}
