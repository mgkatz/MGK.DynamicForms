import { ComponentFactoryResolver, ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { ErrorMessages } from '../messages/error.messages';
import { DynamicDisplayComponentBase } from './dynamic-display-component-base';
import { DynamicDisplayRegistryService } from './dynamic-display-registry.service';

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
            throw new Error(ErrorMessages.useOfUnsupportedType(this.metadata.display.componentType));
        }
        
        const component = this.resolver.resolveComponentFactory<DynamicDisplayComponentBase>(displayComponent);
        this.component = this.container.createComponent(component);
        this.component.instance.metadata = this.metadata;
        this.component.instance.value = this.value;
    }
}
