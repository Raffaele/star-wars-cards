import { Paginator } from './Paginator';
import { shallow } from 'enzyme';

describe('<Paginator />', () => {
    it('should set the correct text in buttons and current-page indicator', () => {
        const element = shallow(<Paginator numPage={5} maxPages={9} />);
        expect(element.find('.paginator__prev-page-button').text()).toBe('4');
        expect(element.find('.paginator__number').text()).toBe('5');
        expect(element.find('.paginator__next-page-button').text()).toBe('6');
        expect(element.find('.paginator__last-page-button').text()).toBe('9');
    });
    
    describe('button handling', () => {
        it('should disable the first-page button if it is in first page', () => {
            const element = shallow(<Paginator numPage={1} maxPages={9} />);
            expect(element.find('.paginator__first-page-button').props().disabled).toBe(true);
        });
    
        it('should disable the last-page button if it is in last page', () => {
            const element = shallow(<Paginator numPage={9} maxPages={9} />);
            expect(element.find('.paginator__last-page-button').props().disabled).toBe(true);
        });
    
        it('should not have the prev-page button if it is in 2nd page', () => {
            const element = shallow(<Paginator numPage={2} maxPages={9} />);
            expect(element.find('.paginator__prev-page-button').length).toBe(0);
        });
    
        it('should not have the next-page button if it is in 2nd-last page', () => {
            const element = shallow(<Paginator numPage={8} maxPages={9} />);
            expect(element.find('.paginator__next-page-button').length).toBe(0);
        });
    });
    
    describe('button behaviour', () => {
        let setNumPage;
        let element;
        beforeEach(() => {
            setNumPage = jest.fn();
            element = shallow(<Paginator numPage={5} maxPages={10} setNumPage={setNumPage} />);
        });

        it('should go to first page when user clicks on first-page button', () => {
            element.find('.paginator__first-page-button').simulate('click');
            expect(setNumPage).toHaveBeenCalledWith(1);
        });

        it('should go to next page when user clicks on next-page button', () => {
            element.find('.paginator__next-page-button').simulate('click');
            expect(setNumPage).toHaveBeenCalledWith(6);
        });

        it('should go to last page when user clicks on last-page button', () => {
            element.find('.paginator__last-page-button').simulate('click');
            expect(setNumPage).toHaveBeenCalledWith(10);
        });
    });

});