import { ComponentFactoryResolver, ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { ErrorExtensions } from '../../messages/error.messages';
import { DynamicDisplayRegistryService } from '../../services/dynamic-display-registry.service';
import { DynamicDisplayComponentBase } from './dynamic-display-component-base';


@Directive({selector: '[appDynamicDisplayHost]'})
export class DynamicDisplayDirective {
    @Input() metadata: any; // PropertyBagMetadataItem
    @Input() value: any;

    component: ComponentRef<DynamicDisplayComponentBase>;
    @Input() parent: any;

    constructor(
        private container: ViewContainerRef,
        private resolver: ComponentFactoryResolver,
        private dynamicDisplayRegistry: DynamicDisplayRegistryService) {}

    ngOnInit() {
        const displayComponent = this.dynamicDisplayRegistry
            .getDisplayTemplate(this.metadata.display.componentType.toLowerCase());

        if (!displayComponent) {
            throw new Error(ErrorExtensions.useOfUnsupportedType(this.metadata.display.componentType));
        }

        const component = this.resolver.resolveComponentFactory<DynamicDisplayComponentBase>(displayComponent);
        this.component = this.container.createComponent(component);
        this.component.instance.metadata = this.metadata;
        this.component.instance.value = this.value;
    }
}
